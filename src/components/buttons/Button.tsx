import clsx from 'clsx'

interface Props {
  children: string | React.ReactNode
  measure?: 'small' | 'bigger'
  type?: 'submit' | 'button'
}

function Button({ children, measure, type }: Props) {
  const styles = {
    button: clsx('bg-gradient-to-br text-lg self-center from-[#2600FC]  to-[#FF00EA] font-bold rounded-full flex gap-2 col-span-full', type === 'submit' && '!px-20', measure === 'small' && 'py-3.5 px-6', measure === 'bigger' && 'py-5 px-11', !measure && 'py-5 px-11')
  }
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
