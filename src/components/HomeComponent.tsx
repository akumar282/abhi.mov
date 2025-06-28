import waves from '../assets/waves.png'

export function HomeComponent() {
  return (
    <div className='w-screen h-screen bg-indigo-950'>
      <div style={{ backgroundImage: `url(${waves})` }} className='bg-center bg-repeat h-screen w-full flex justify-center items-center'>
        <div className='w-3/6 h-2/6 rounded-xl bg-white/20 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100'>
          <h3 className='text-white'>
            yo
          </h3>
        </div>
      </div>
    </div>
  )
}
