'use client'
import themeConfig from '@/config/themeConfig'
import Layout from '@/layout/layout001/Layout001'
import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material'
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter'
import type { AppProps } from 'next/app'

// Next.js usa o Appcomponente para inicializar páginas
// definir o layout global
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={themeConfig}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppCacheProvider>
  )
}
