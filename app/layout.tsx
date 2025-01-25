'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './global.css';

import { ApolloProvider } from '@apollo/client';
import { createTheme, CssBaseline, Theme, ThemeProvider } from '@mui/material';
import * as React from 'react';
import dynamic from "next/dynamic";
import { AuthContextProvider, useAuthContext } from './components/auth-context-provider';
import lightThemeOptions from './styles/theme/lightThemeOptions';
import { getApolloClient } from './utility/apollo-client';
import createEmotionCache from './utility/create-emotion-cache';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import darkThemeOptions from './styles/theme/darkThemeOptions';
import { usePathname } from 'next/navigation';
import Head from 'next/head';


interface MyAppProps {
  emotionCache: EmotionCache;
  themes: { lightTheme: Theme, darkTheme: Theme }
}

const props: MyAppProps = {
  emotionCache: createEmotionCache(),
  themes: { lightTheme: createTheme(lightThemeOptions), darkTheme: createTheme(darkThemeOptions) },
}

const getTitleFromPath = (pathName: string | null) => {
  const pathTitles: { [key: string]: string } = {
    "/": "Domů",
    "/subscriptions": "Odběry",
    "/history": "Historie",
    "/yoursVideos": "Vaše videa",
    "/favoritesVideos": "Oblíbená videa",
    "/changePassword": "Změna hesla",
    "/changeEmail": "Změna emailu",
    "/login": "Přihlásit se",
  };

  return pathTitles[pathName as string] || "socialM";
};

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
  const pathName = usePathname()
  const title = getTitleFromPath(pathName)

  return (
    <html lang="cs-CZ">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </html>
  );
}
