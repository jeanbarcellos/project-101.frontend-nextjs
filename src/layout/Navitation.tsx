import navigationConfig from '@/config/navigationConfig'
import { List, ListItem, ListItemText, styled } from '@mui/material'
import Link from 'next/link'

const Root = styled('nav')(() => ({
  display: 'flex',
  // flexDirection: 'column',
  // width: config.drawer.width,
  backgroundColor: '#FDFCFC',
  width: '240px',
  height: '100vh'
  // borderRight: '2px solid #DBDBDB',
}))

export default function Navigation({ children }: { children: React.ReactNode }) {
  return (
    <Root id='layout-navbar'>
      <List>
        {navigationConfig.map(item => (
          <ListItem key={item.id}>
            <Link href={item.url}>
              {/* <ListItemIcon>
                  <Icon>{item.icon}</Icon>
                </ListItemIcon> */}
              <ListItemText primary={item.text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Root>
  )
}
