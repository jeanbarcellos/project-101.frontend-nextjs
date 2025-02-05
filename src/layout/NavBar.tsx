import layoutConfig from '@/config/layoutConfig'
import navigationConfig from '@/config/navigationConfig'
import { Icon, List, ListItem, ListItemIcon, ListItemText, styled } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'

const NavBarRoot = styled('nav')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: layoutConfig.drawer.width,
  flex: '0 0 auto',
  backgroundColor: '#FDFCFC',
  height: '100vh',
  paddingTop: layoutConfig.toolbar.height,
  borderRight: '2px solid #DBDBDB'
}))

interface NavBarProps {
  id?: string | 'layout-navbar'
  className?: string
}

const NavBar = (props: NavBarProps) => {
  const router = useRouter()

  const { id } = props

  const selected = () => {
    // router.pathname.match(item.url);
  }

  return (
    <NavBarRoot id={id}>
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
    </NavBarRoot>
  )
}

export default memo(NavBar)
