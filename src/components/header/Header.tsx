import clsx from "clsx"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({subsets: ['latin'] })


function Header() {
  const style = {
    logo: clsx('text-white font-bold text-lg', orbitron.className),
  }  
  return (
    <header className="wrapper">
     <span className={style.logo}>
       NFTHUB
     </span>
    </header>
  )
}

export default Header