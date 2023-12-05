import Marquee from 'react-fast-marquee'

interface MarqueeProps {
  content: React.ReactNode[]
}

function MarqueeBrands({ content }: MarqueeProps) {
  return (
    <Marquee className='wrapper flex gap-11'>
      <div className='flex items-center gap-11 justify-center animate-marquee whitespace-nowrap'>
        {content.map((data) => {
          return data
        })}
      </div>
      <div className='flex gap-11 items-center justify-center animate-marquee2 whitespace-nowrap'>
        {content.map((data) => {
          return data
        })}
      </div>
    </Marquee>
  )
}

export default MarqueeBrands
