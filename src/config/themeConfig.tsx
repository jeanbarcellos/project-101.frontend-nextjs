'use client'
import { ptBR } from '@mui/material/locale'
import { createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

const themeConfig = createTheme(
  {
    cssVariables: true,
    palette: {
      mode: 'light'
    },
    // status: {
    //   danger: orange[500]
    // },
    typography: {
      fontFamily: 'var(--font-roboto)',
      htmlFontSize: 10,
      fontSize: 13,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      body1: {
        fontSize: '1.3rem'
      },
      body2: {
        fontSize: '1.3rem'
      }
    }
  },
  ptBR
)

export default themeConfig
