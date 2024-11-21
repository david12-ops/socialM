// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
// import '../styles/globals.css';

// import { ApolloProvider } from '@apollo/client';
// import { CacheProvider, EmotionCache } from '@emotion/react';
// import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
// import type { AppProps } from 'next/app';
// import * as React from 'react';

// import { getApolloClient } from './utility/apollo-client';

// import { AuthContextProvider } from './components/auth-context-provider';
// import lightThemeOptions from './styles/theme/lightThemeOptions';
// import createEmotionCache from './utility/createEmotionCache';

// interface MyAppProps extends AppProps {
//   emotionCache?: EmotionCache;
// }

// const clientSideEmotionCache = createEmotionCache();

// const lightTheme = createTheme(lightThemeOptions);

// const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
//   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
//   const apolloClient = getApolloClient({ forceNew: false });
//   return (
//     <AuthContextProvider>
//       <ApolloProvider client={apolloClient}>
//         <CacheProvider value={emotionCache}>
//           <ThemeProvider theme={lightTheme}>
//             <CssBaseline />
//             <Component {...pageProps} />
//           </ThemeProvider>
//         </CacheProvider>
//       </ApolloProvider>
//     </AuthContextProvider>
//   );
// };

// // eslint-disable-next-line import/no-default-export
// export default MyApp;
