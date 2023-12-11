import clsx from 'clsx'

interface Props {
  children: string | React.ReactNode
  measure?: 'small' | 'bigger'
}

function Button({ children, measure }: Props) {
  const styles = {
    button: clsx('bg-gradient-to-br text-lg self-center from-[#2600FC]  to-[#FF00EA] font-bold rounded-full flex gap-2 col-span-full', measure === 'small' && 'py-3.5 px-6', measure === 'bigger' && 'py-5 px-11', !measure && 'py-5 px-11')
  }
  return <button className={styles.button}>{children}</button>
}

export default Button
