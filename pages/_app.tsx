import '../styles/globals.css'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-N2PVX4P' });
}, []);
  return <Component {...pageProps} />
}
export default MyApp

