'use client'
import layoutConfig from '@/config/layoutConfig'
import { CssBaseline, styled } from '@mui/material'
import Footer from './Footer'
import Main from './Main'
import NavBar from './NavBar'
import Toolbar from './Toolbar'
import { memo } from 'react'

interface Layout001Props {
  children: React.ReactNode
}

const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
  display: 'flex',
  width: '100%',
  position: 'relative'
  // flexDirection: 'column',
  // flex: '1 1 auto',
}))

function Layout001(props: Layout001Props) {
  return (
    <Root id='layout-root'>
      <CssBaseline />

      {layoutConfig.toolbar.display && <Toolbar id='layout-toolbar' />}

      {layoutConfig.navbar.display && <NavBar id='layout-navbar' />}

      <Main id='layout-main'> {props.children}</Main>

      {layoutConfig.footer.display && <Footer />}
    </Root>
  )
}

export default memo(Layout001)