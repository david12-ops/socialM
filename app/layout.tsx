'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './global.css';

import { ApolloProvider } from '@apollo/client';
import { createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
import * as React from 'react';

import { AuthContextProvider, useAuthContext } from './components/auth-context-provider';
import lightThemeOptions from './styles/theme/lightThemeOptions';
import { getApolloClient } from './utility/apollo-client';
import createEmotionCache from './utility/create-emotion-cache';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import darkThemeOptions from './styles/theme/darkThemeOptions';

//udelat responzivitu jen - tabulka bude orisek

interface MyAppProps {
  emotionCache: EmotionCache;
  themes: { lightTheme: Theme, darkTheme: Theme }
}

const props: MyAppProps = {
  emotionCache: createEmotionCache(),
  themes: { lightTheme: createTheme(lightThemeOptions), darkTheme: createTheme(darkThemeOptions) },
}

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('./components/navBar'), { ssr: false });

// eslint-disable-next-line import/no-default-export
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { emotionCache, themes } = props;
  const { user } = useAuthContext()
  const apolloClient = getApolloClient({ forceNew: false });
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav>
            <Navbar user={user} />
          </nav>
        </header>
        <AuthContextProvider>
          <ApolloProvider client={apolloClient}>
            <CacheProvider value={emotionCache}>
              <ThemeProvider theme={themes.lightTheme}>
                <CssBaseline />
                <main>
                  {children}
                </main>
              </ThemeProvider>
            </CacheProvider>
          </ApolloProvider>
        </AuthContextProvider>
      </body>
    </html >
  );
}
