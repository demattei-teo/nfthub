export interface TitleProps {
  title: string
  highlightTitle: string
}

function Title({ title, highlightTitle }: TitleProps) {
  return (
    <h2 className='text-fluid-xl font-bold flex flex-col md:flex-row text-center leading-fluid-xs md:gap-5'>
      {title} <span className='bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center'>{highlightTitle}</span>
    </h2>
  )
}
export default Title
