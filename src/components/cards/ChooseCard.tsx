import clsx from 'clsx'

export interface ChooseCardProps {
  icon?: React.ReactNode
  title: string
  description: string
}

function Card({ icon, title, description }: ChooseCardProps) {
  const styles = {
    wrapper: clsx('border border-gray-400 transition-transform duration-500  px-8 flex flex-col gap-8 py-12 rounded-3xl xl:hover:translate-y-12')
  }
  return (
    <article className={styles.wrapper}>
      {icon}
      <h4 className='text-fluid-base font-bold'>{title}</h4>
      <p className='text-gray-400'>{description}</p>
    </article>
  )
}

export default Card
