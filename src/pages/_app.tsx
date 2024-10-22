import type { AppProps } from 'next/app'
import Layout from '../layout/Layout001'
import '../styles/globals.css'


// Next.js usa o Appcomponente para inicializar páginas
// definir o layout global
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}