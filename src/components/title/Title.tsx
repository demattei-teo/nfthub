import clsx from 'clsx'

export interface TitleProps {
  title?: string
  highlightTitle: string
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

function Title({ title, highlightTitle, headingLevel = 'h2' }: TitleProps) {
  const HeadingTag = headingLevel
  const style = {
    title: clsx('text-fluid-xl z-20 font-bold flex flex-col md:flex-row text-center leading-fluid-xs md:gap-5', headingLevel === 'h1' ? 'text-fluid-2xl' : 'text-fluid-xl')
  }
  return (
    <HeadingTag className={style.title}>
      {title} <span className='bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center'>{highlightTitle}</span>
    </HeadingTag>
  )
}

export default Title
