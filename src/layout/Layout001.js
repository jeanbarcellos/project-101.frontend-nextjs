export default function Layout001({ children }) {
  return (
    <>
      <div className='mb-10'>Layout 001 - Mavbar</div>
      <hr />
      <main>{children}</main>
      <hr />
      <div className='text-green-600'>Footer</div>
    </>
  )
}
