import Link from 'next/link'

export default function Layout001({ children }) {

  const navigation = [
    {
      id: 'home',
      text: 'Home',
      url: '/'
    },
    {
      id: 'about',
      text: 'About Us',
      url: '/about'
    },
    {
      id: 'posts',
      text: 'Posts',
      url: '/posts'
    },
    {
      id: 'contacts',
      text: 'Contacts',
      url: '/contacts'
    }
  ]

  return (
    <>
      <header className='p-1 border-b-2 border-gray-300 text-center'>
        Layout 001
        <br />
        Header
      </header>

      <nav className=''>
        <ul>
          {navigation.map(item => (
            <li key={item.id}>
              <Link href={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className='p-4'>{children}</main>

      <footer className='p-1 border-y-2 border-gray-300 text-center'>Footer - Jean Barcellos @ 2024</footer>
    </>
  )
}
