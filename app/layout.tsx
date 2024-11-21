'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.css';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
// import { CacheProvider, EmotionCache } from '@emotion/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
// import type { AppProps } from 'next/app';
import * as React from 'react';

import { getApolloClient } from './utility/apollo-client';

import { AuthContextProvider } from './components/auth-context-provider';
import lightThemeOptions from './styles/theme/lightThemeOptions';
import createEmotionCache from './utility/createEmotionCache';

// interface MyAppProps extends AppProps {
//   emotionCache?: EmotionCache;
// }
// props: MyAppProps
const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const { emotionCache = clientSideEmotionCache } = props;
  //const apolloClient = new ApolloClient({ uri: "http://localhost:3000/api/graphql", cache: new InMemoryCache() })
  const apolloClient = getApolloClient({ forceNew: false });
  return (
    <html lang="en">
      <head />
      <body>
        <AuthContextProvider>
          <ApolloProvider client={apolloClient}>
            {/* <CacheProvider value={emotionCache}> */}
            <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
            {/* </CacheProvider> */}
          </ApolloProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
};