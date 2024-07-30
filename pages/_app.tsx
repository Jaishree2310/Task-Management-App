// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }





import '../styles/app.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp