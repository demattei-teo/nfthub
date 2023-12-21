interface DividerWithHeadingProps {
  heading: string
}

function DividerWithHeading({ heading }: DividerWithHeadingProps) {
  return (
    <span className='text-gray-400'>
      <span className='z-20'>{heading}</span>
      <span className='absolute z-10 left-0  top-1/2 w-[40%] h-0.5 bg-gray-300' />
      <span className='absolute z-10 w-[40%] top-1/2 right-0  h-0.5  bg-gray-300' />
    </span>
  )
}

export default DividerWithHeading
