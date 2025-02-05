import layoutConfig from '@/config/layoutConfig'
import { Link, styled, Typography } from '@mui/material'
import { memo } from 'react'

const FooterRoot = styled('footer')(() => ({
  position: 'fixed',
  width: '100%',
  height: layoutConfig.footer.height,
  bottom: 0,
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  background: '#FFFFFF',
  textAlign: 'center',
  padding: '5px'
}))

interface FooterProps {
  id?: string | 'layout-Footer'
}

const Footer = (props: FooterProps) => {
  const { id } = props

  return (
    <FooterRoot id={id}>
      <Typography variant='body1' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='https://jeanbarcellos.com.br/'>
          Jean Barcellos
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </FooterRoot>
  )
}

export default memo(Footer)
