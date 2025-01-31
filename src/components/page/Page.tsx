import clsx from 'clsx'
// import * as PropTypes from 'prop-types'

interface ClassesProps {
  root?: string | ''
  header?: string | ''
  content?: string | ''
}

// Alias
interface PageProps {
  header?: React.ReactNode
  content?: React.ReactNode
  className?: string
  classes?: any //ClassesProps
}

const Page = (props: PageProps) => {
  const { classes } = props

  return (
    <div id='page-root' className={clsx(classes.root, props.className)}>
      {props.header && (
        <div id='page-header' className={classes.header}>
          {props.header}
        </div>
      )}
      {props.content && (
        <div id='page-content' className={classes.content}>
          {props.content}
        </div>
      )}
    </div>
  )
}

// Page.propTypes = {
//   header: PropTypes.node,
//   content: PropTypes.node
// }

// Page.defaultProps = {
//   classes: {
//     root: '',
//     header: '',
//     content: ''
//   }
// }

export default Page
