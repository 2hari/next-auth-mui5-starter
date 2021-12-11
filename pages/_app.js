import {  ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from "next-auth/react"

import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';
import React,{useState,useEffect} from 'react'
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import theme from '../lib/theme';
// import { Provider as AppContextProvider } from '../lib/appContext';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {

  const { session,Component, emotionCache = clientSideEmotionCache, pageProps } = props


  return (
    <SessionProvider session={session}>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <ToastContainer position="top-center" />
        <CssBaseline/>
          {/* <Provider> */}
            <Component {...pageProps} />
          {/* </Provider> */}
      </ThemeProvider>
    </CacheProvider>
    </SessionProvider>
  )
}

export default MyApp
