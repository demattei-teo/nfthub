import Marquee from 'react-fast-marquee'

interface MarqueeProps {
  content: React.ReactNode[]
}

function MarqueeBrands({ content }: MarqueeProps) {
  return (
    <Marquee className='max-w-4xl my-0 mx-auto'>
      {content.map((data) => {
        return data
      })}
    </Marquee>
  )
}

export default MarqueeBrands
