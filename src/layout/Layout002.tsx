export default function Layout002({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='mb-10'>Layout 002 - Mavbar</div>
      <hr />
      <main>{children}</main>
      <hr />
      <div>Footer</div>
    </>
  )
}
