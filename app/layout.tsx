'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.css';

import { ApolloProvider } from '@apollo/client';
// import { CacheProvider, EmotionCache } from '@emotion/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
// import type { AppProps } from 'next/app';
import * as React from 'react';

import { AuthContextProvider } from './components/auth-context-provider';
import lightThemeOptions from './styles/theme/lightThemeOptions';
import { getApolloClient } from './utility/apollo-client';
import createEmotionCache from './utility/create-emotion-cache';

// interface MyAppProps extends AppProps {
//   emotionCache?: EmotionCache;
// }
// props: MyAppProps
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

// eslint-disable-next-line import/no-default-export
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { emotionCache = clientSideEmotionCache } = props;
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
}
