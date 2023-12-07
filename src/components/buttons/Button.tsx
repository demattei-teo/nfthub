import clsx from 'clsx'

interface Props {
  children: string | React.ReactNode
}

function Button({ children }: Props) {
  const styles = {
    button: clsx('bg-gradient-to-br text-lg self-center from-[#2600FC]  to-[#FF00EA] font-bold py-5 px-11 rounded-full flex gap-2 col-span-full')
  }
  return <button className={styles.button}>{children}</button>
}

export default Button
