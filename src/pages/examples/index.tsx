import Page from '@/components/page/Page'
import PageContentDemo from '@/components/page/PageContentDemo'
import PageTitle from '@/components/page/PageTitle'

const ExamplesPage = () => {
  return (
    <Page
      classes={{
        root: 'p-24'
      }}
      header={<PageTitle>Examples</PageTitle>}
      content={<PageContentDemo />}
    />
  )
}

export default ExamplesPage
