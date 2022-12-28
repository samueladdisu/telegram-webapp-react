import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function Home() {
  return (
    <div>
      <header className='mt-6'>
        <section className='flex justify-between'>
          <div>
            <h2 className='text-xs font-sans font-light'>Welcome Back!</h2>
            <h1 className='text-sm font-medium'>Samuel</h1>
          </div>

          <div className='shadow-sm rounded-full w-10 grid place-items-center'>
            <ShoppingBagOutlinedIcon />
          </div>
        </section>
        
      </header>
    </div>
  )
}

export default Home