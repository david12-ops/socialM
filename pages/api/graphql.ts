import 'firebase/compat/storage';

import { Context } from '@apollo/client';
import { ApolloServer } from '@apollo/server'
//import { isValid } from 'date-fns';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';
import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers'
import { verifyToken } from './verify-token';

const apolloserver = new ApolloServer<Context>({
    resolvers,
    typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloserver, {
    context: async (req, res) => {
        const auth = req.headers.get?.('authorization') || req.headers['authorization'];
        return {
            user: auth ? await verifyToken(auth) : undefined
        } as Context
    }
});

export default handler;