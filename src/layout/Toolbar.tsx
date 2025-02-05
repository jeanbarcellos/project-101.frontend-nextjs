import layoutConfig from '@/config/layoutConfig'
import { styled } from '@mui/material'
import { memo } from 'react'

const ToolbarRoot = styled('header')(() => ({
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

interface ToolbarProps {
  id?: string | 'layout-Toolbar'
}

const Toolbar = (props: ToolbarProps) => {
  const { id } = props

  return (
    <ToolbarRoot id={id}>
      Layout 001
      <br />
      Header
    </ToolbarRoot>
  )
}

export default memo(Toolbar)
