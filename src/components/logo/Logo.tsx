import clsx from 'clsx'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })

interface Props {
  content: string
}

function Logo({ content }: Props) {
  const style = {
    logo: clsx('text-white font-bold text-lg', orbitron.className)
  }

  return <span className={style.logo}>{content}</span>
}

export default Logo
