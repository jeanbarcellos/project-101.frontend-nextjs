import clsx from 'clsx'
// import * as PropTypes from 'prop-types'

// Alias
type PageType = {
  className?: any
  header?: any
  content?: any
  classes?: any
}

// Page.propTypes = {
//   header: PropTypes.node,
//   content: PropTypes.node
// }


const Page = (props: PageType) => {
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
//   classes: {}
// }

export default Page
