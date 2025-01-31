import { DocumentHeadTags, DocumentHeadTagsProps, documentGetInitialProps } from '@mui/material-nextjs/v15-pagesRouter'
import { DocumentContext, DocumentProps, Head, Html, Main, NextScript } from 'next/document'

// para controlar a resposta inicial do servidor
export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  return (
    <Html>
      <Head>
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx)
  return finalProps
}
