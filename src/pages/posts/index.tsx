import Page from '@/components/page/Page'
import PageTitle from '@/components/page/PageTitle'
import Link from 'next/link'

export default function PostPage() {
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' }
  ]

  return (
    <Page
      classes={{
        root: 'p-24'
      }}
      header={<PageTitle>Posts</PageTitle>}
      content={
        <>
          <h1 className='mb-3'>Post!</h1>
          <div>Loem ipsum</div>
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <Link href={`/posts/${encodeURIComponent(post.id)}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
          <p>
            <Link href='/'>Voltar</Link>
          </p>
        </>
      }
    />
  )
}
