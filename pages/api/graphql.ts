import 'firebase/compat/storage';

import { Context } from '@apollo/client';
import { ApolloServer } from '@apollo/server';
// import { isValid } from 'date-fns';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';

import { resolvers } from '@/graphql/resolvers';
import { typeDefs } from '@/graphql/schema';

import { verifyToken } from './verify-token';

const apolloserver = new ApolloServer<Context>({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloserver, {
  context: async (req) => {
    const auth =
      // eslint-disable-next-line @typescript-eslint/dot-notation
      req.headers.get?.('authorization') || req.headers['authorization'];
    return {
      user: auth ? await verifyToken(auth as string) : undefined,
    } as Context;
  },
});

// eslint-disable-next-line import/no-default-export
export default handler;
