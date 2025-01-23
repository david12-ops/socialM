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

function getAuthorizationHeader(headers: Headers | Record<string, string>): string | null {
  if (typeof headers.get === 'function') {
    return headers.get('authorization');
  } else {
    return (headers as Record<string, string>)['authorization'] || null;
  }
}

const handler = startServerAndCreateNextHandler<NextRequest>(apolloserver, {
  context: async (req) => {
    const auth = getAuthorizationHeader(req.headers)

    return {
      user: auth ? await verifyToken(auth as string) : undefined,
    } as Context;
  },
});

// eslint-disable-next-line import/no-default-export
export default handler;
