export interface TitleProps {
  title: string
  highlightTitle: string
  headingLevel: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

function Title({ title, highlightTitle, headingLevel = 'h2' }: TitleProps) {
  const HeadingTag = headingLevel

  return (
    <HeadingTag className='text-fluid-xl z-20 font-bold flex flex-col md:flex-row text-center leading-fluid-xs md:gap-5'>
      {title} <span className='bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center'>{highlightTitle}</span>
    </HeadingTag>
  )
}

export default Title
