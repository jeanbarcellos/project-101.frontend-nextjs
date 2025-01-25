import type { AppProps } from 'next/app'
import Layout from '../layout/Layout001'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import themeConfig from '@/config/themeConfig'


// Next.js usa o Appcomponente para inicializar páginas
// definir o layout global
export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={themeConfig}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}