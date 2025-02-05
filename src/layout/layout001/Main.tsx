import layoutConfig from '@/config/layoutConfig'
import { styled } from '@mui/material'

const MainRoot = styled('main')(() => ({
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

interface MainProps {
  id?: string | 'layout-main'
  children?: React.ReactNode
}

const Main = (props: MainProps) => {
  const { id, children } = props

  return (
    <MainRoot id={id}>
      <ToolbarSpacer />
      {children}
      <FooterSpacer />
    </MainRoot>
  )
}

export default Main
