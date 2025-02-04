import Typography from '@mui/material/Typography'

interface PageTitle {
  children: React.ReactNode
}

const PageTitle = (props: PageTitle) => {
  return (
    <Typography variant='h3' component='h3' className='mb-24'>
      {props.children}
    </Typography>
  )
}

export default PageTitle
