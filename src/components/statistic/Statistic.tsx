import clsx from 'clsx'
import Image from 'next/image'

export interface StatisticProps {
  statisticCard: {
    title: string
    detail: string
    border?: boolean
  }[]
}

function Statistic({ statisticCard }: StatisticProps) {
  return (
    <section className='wrapper grid sm:grid-cols-2 lg:grid-cols-4 relative'>
      <Image src='/shapes/shape9.png' width={30} height={30} alt='shape' className='absolute right-[0%] -top-[5%] lg:-top-[20%] lg:right-[20%]' />
      <Image src='/shapes/shape10.png' width={30} height={30} alt='shape' className='absolute right-[0%] -bottom-[10%] left-[20%]' />
      {statisticCard.map((data, index) => {
        const styles = {
          wrapper: clsx('p-5', data.border && 'lg:border-r lg:border-gray-500')
        }
        return (
          <div className={styles.wrapper} key={index}>
            <p className='text-fluid-xl text-center font-bold'>{data.title}</p>
            <p className='text-gray-400 text-center'>{data.detail}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Statistic
