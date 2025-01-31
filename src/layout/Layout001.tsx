'use client'
import layoutConfig from '@/config/layoutConfig'
import navigationConfig from '@/config/navigationConfig'
import { CssBaseline, Icon, List, ListItem, ListItemIcon, ListItemText, styled } from '@mui/material'
import Link from 'next/link'


type InputProps = {
  config: any
}

const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
  display: 'flex',
  width: '100%',
  position: 'relative'
  // flexDirection: 'column',
  // flex: '1 1 auto',
}))

const Toolbar = styled('header')(() => ({
  display: 'flex',
  width: '100%',
  height: layoutConfig.toolbar.height,
  // flex: '0 0 auto',
  flexDirection: 'column',
  position: 'absolute',
  top: 0,
  //
  backgroundColor: '#FDFCFC',
  color: '#000000',
  textAlign: 'center',
  padding: '10px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  alignItems: 'center'
}))

const Navigation = styled('nav')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: layoutConfig.drawer.width,
  flex: '0 0 auto',
  backgroundColor: '#FDFCFC',
  height: '100vh',
  paddingTop: layoutConfig.toolbar.height,
  borderRight: '2px solid #DBDBDB'
}))

const Main = styled('main')(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
  padding: '0'
}))

const ToolbarSpacer = styled('div')(() => ({
  // display: 'flex',
  // flexDirection: 'column',
  width: '100%',
  minHeight: layoutConfig.toolbar.height,
  height: layoutConfig.toolbar.height
}))

const FooterSpacer = styled('div')(() => ({
  // display: 'flex',
  // flexDirection: 'column',
  width: '100%',
  minHeight: layoutConfig.footer.height,
  height: layoutConfig.footer.height
}))

const Footer = styled('div')(() => ({
  position: 'fixed',
  width: '100%',
  height: layoutConfig.footer.height,
  bottom: 0,
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  background: '#FFFFFF',
  textAlign: 'center',
  padding: '5px'
}))

export default function Layout001({ children }: { children: React.ReactNode }) {
  return (
    <Root id='layout-root'>
      <CssBaseline />

      <Toolbar id='layout-toolbar'>
        Layout 001
        <br />
        Header
      </Toolbar>

      <Navigation id='layout-navbar'>
        <List>
          {navigationConfig.map(item => (
            <ListItem key={item.id} component={Link} href={item.url}>
              <ListItemIcon>
                <Icon>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Navigation>

      <Main id='layout-main'>
        <ToolbarSpacer />
        {children}
        <FooterSpacer />
      </Main>

      <Footer id='layout-footer'>Footer - Jean Barcellos @ 2024</Footer>
    </Root>
  )
}
