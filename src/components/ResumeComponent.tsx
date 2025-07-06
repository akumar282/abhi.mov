interface ResumeProps {
  company: string
  description: string
  image: string
}

export function ResumeComponent(props: ResumeProps) {
  return (
    <div
      className='h-full rounded-3xl w-11/12 bg-white/40 bg-clip-padding shadow-lg flex lg:flex-row flex-col items-start justify-center'>
      <div className='lg:w-4/12 md:w-3/6  h-11/12 m-4 border-white bg-white border-10 rounded-3xl'>
        <img src={props.image} className='rounded-2xl' alt='Boeing 777X with olympic mountain range background'/>
      </div>
      <div className='flex flex-col lg:mt-5 space-y-5 lg:w-8/12'>
        <h1 className='text-2xl'>{props.company}</h1>
        <h3 className='m-3'>
          {props.description}
        </h3>
      </div>
    </div>
  )
}