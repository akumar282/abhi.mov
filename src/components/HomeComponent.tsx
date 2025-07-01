import waves from '../assets/waves.png'
import Typewriter from 'typewriter-effect'

export function HomeComponent() {

  return (
    <>
      <div className='w-screen h-screen bg-indigo-950' id='screen'>
        <div style={{backgroundImage: `url(${waves})`}}
             className='bg-center bg-repeat h-full w-full flex justify-center items-center' id='background'>
          <div
            className='w-full h-full rounded-xl bg-white/12 bg-clip-padding backdrop-filter flex flex-col items-center justify-center backdrop-contrast-125'>
            <div className='flex items-center w-11/12 h-full justify-center flex-col space-y-4 p-2' id='typewriter'>
              <h1 className='text-white text-center font-primary text-4xl'>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Hello, my name is Abhi!')
                      .start()
                  }}
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen h-dvh flex items-start text-center justify-center bg-violet-500' id='about-section'>
        <div className='w-11/12 h-7/12 justify-start flex-col p-6 space-y-4 flex'>
          <h1 className='text-white font-primary text-2xl'>
            About me
          </h1>
          <h3 className='text-white font-primary text-lg '>
            I'm abhi, a full stack engineer based in Seattle, Washington
          </h3>
        </div>
      </div>
    </>

  )
}
