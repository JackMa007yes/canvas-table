import { Outlet } from 'react-router-dom'

const LayoutMain = (): JSX.Element => {
  return (
    <>
      <main className=''>
        <Outlet />
      </main>
    </>
  )
}

export default LayoutMain
