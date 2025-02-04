import clsx from 'clsx'
import { memo } from "react"

interface PageClassesProps {
  root?: string | ''
  header?: string | ''
  content?: string | ''
}

interface PageProps {
  header?: React.ReactNode
  content: React.ReactNode
  className?: string
  classes?: Partial<PageClassesProps>
}

const Page = (props: PageProps) => {
  const { header, content, className, classes } = props

  return (
    <div id='page-root' className={clsx(classes?.root, className)}>
      {header && <div id='page-header' className={classes?.header}>{header}</div>}
      {content && <div id='page-content' className={classes?.content}>{content}</div>}
    </div>
  )
}

Page.displayName = "Page"

export default memo(Page)
