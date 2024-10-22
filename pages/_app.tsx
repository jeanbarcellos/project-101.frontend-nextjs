import type { AppProps } from 'next/app'
 
// Next.js usa o Appcomponente para inicializar páginas
// definir o layout global
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}