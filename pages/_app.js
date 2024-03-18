import "../styles/globals.css";
import '@aws-amplify/ui-react/styles.css'
import {ThemeProvider} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import config from '../src/amplifyconfiguration.json';

Amplify.configure(config)

export default function App({ Component, pageProps }) {
  return(
         <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : <Component {...pageProps} /> }
          </div>
);
}
