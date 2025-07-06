import waves from '../assets/waves.png'
import b777x from '../assets/b777x_wh001.jpg'
import ninety8point6 from '../assets/ninety8point6.jpg'
import mcw from '../assets/mcw.png'
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
      <div
        className='w-screen flex items-center flex-col text-center text-white font-primary justify-center bg-violet-500'
        id='about-section'>
        <div className='w-10/12 h-7/12 justify-start flex-col p-6 space-y-4 flex'>
          <h1 className='text-white font-primary text-2xl'>
            About me
          </h1>
          <h3 className='text-white font-primary text-lg'>
            I'm abhi, a full stack engineer based in Seattle, Washington
          </h3>
          <h3 className='text-white font-primary text-lg '>
            I've been developing different types of software professionally for around 3 years and in different
            industries, mostly being healthcare and aviation. I have experience developing in several domains like web,
            embedded, mobile, and cloud (my favorite).
          </h3>
        </div>
        <div className='w-11/12 h-7/12 items-center my-10 flex-col space-y-4 flex' id='Experience Div'>
          <h1 className='text-white font-primary text-2xl'>
            Experience
          </h1>
          <div
            className='h-full rounded-3xl w-11/12 bg-white/40 bg-clip-padding shadow-lg flex lg:flex-row flex-col items-start justify-center'>
            <div className='lg:w-4/12 md:w-3/6  h-11/12 m-4 border-white bg-white border-10 rounded-3xl'>
              <img src={b777x} className='rounded-2xl' alt='Boeing 777X with olympic mountain range background'/>
            </div>
            <div className='flex flex-col lg:mt-5 space-y-5 lg:w-8/12'>
              <h1 className='text-2xl'>The Boeing Company</h1>
              <h3 className='m-3'>
                As a software engineer, I worked on the Common Core System in the Integrated Modular Avionics team.
                I helped to design and develop tools to aid in the process of DO-178 and DO-330 software certification
                of the 777X and
                787 Dreamliner. I migrated the tech stack to use modern frameworks to ease the maintenance costs and
                speed up development.
                Additionally, I automated verification processes of aircraft system configuration files used by the
                Common Core System
                improving efficiency and lowering error rates.
              </h3>
            </div>
          </div>
          <div
            className='h-full rounded-3xl w-11/12 bg-white/40 bg-clip-padding shadow-lg flex lg:flex-row flex-col items-start justify-center'>
            <div className='lg:w-4/12 md:w-3/6  h-11/12 m-4 border-white bg-white border-10 rounded-3xl'>
              <img src={ninety8point6} className='rounded-2xl'
                   alt='Boeing 777X with olympic mountain range background'/>
            </div>
            <div className='flex flex-col lg:mt-5 space-y-5 lg:w-8/12'>
              <h1 className='text-2xl'>98point6 Technologies</h1>
              <h3 className='m-3'>
                As a software engineer, I worked on the Common Core System in the Integrated Modular Avionics team.
                I helped to design and develop tools to aid in the process of DO-178 and DO-330 software certification
                of the 777X and
                787 Dreamliner. I migrated the tech stack to use modern frameworks to ease the maintenance costs and
                speed up development.
                Additionally, I automated verification processes of aircraft system configuration files used by the
                Common Core System
                improving efficiency and lowering error rates.
              </h3>
            </div>
          </div>
          <div
            className='h-full rounded-3xl w-11/12 bg-white/40 bg-clip-padding shadow-lg flex lg:flex-row flex-col items-start justify-center'>
            <div className='lg:w-4/12 md:w-3/6  h-11/12 m-4 border-white bg-white border-10 rounded-3xl'>
              <img src={mcw} className='rounded-2xl' alt='Boeing 777X with olympic mountain range background'/>
            </div>
            <div className='flex flex-col lg:mt-5 space-y-5 lg:w-8/12'>
              <h1 className='text-2xl'>Inception Health</h1>
              <h3 className='m-3'>
                As a software engineer, I worked on the Common Core System in the Integrated Modular Avionics team.
                I helped to design and develop tools to aid in the process of DO-178 and DO-330 software certification
                of the 777X and
                787 Dreamliner. I migrated the tech stack to use modern frameworks to ease the maintenance costs and
                speed up development.
                Additionally, I automated verification processes of aircraft system configuration files used by the
                Common Core System
                improving efficiency and lowering error rates.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className='w-screen flex items-center flex-col text-center text-white font-primary justify-center bg-blue-900'
        id='about-section'>
        <div className='w-11/12 h-7/12 items-center my-10 flex-col space-y-4 flex' id='Experience Div'>
          <h1 className='text-white mb-8 font-primary text-2xl'>
            Stuff I know how to use (im really good at these things)
          </h1>
          <div className='grid grid-cols-3 gap-3'>

          </div>
        </div>
      </div>
    </>

  )
}
