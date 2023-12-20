import clsx from 'clsx'
import { signIn, signOut } from 'next-auth/react'

export enum TypeButtons {
  SIGNIN = 'SIGNIN',
  SIGNOUT = 'SIGNOUT'
}

interface ButtonProviderPros {
  children: React.ReactNode | string
  bgColor: 'black' | 'white'
  provider: 'github' | 'google' | 'session'
  type: TypeButtons
}

function ButtonProvider({ children, bgColor, type, provider }: ButtonProviderPros) {
  const styles = {
    button: clsx('py-3 items-center justify-center w-full sm:px-10 flex gap-2 rounded-full font-medium', bgColor === 'black' && 'bg-black text-white', bgColor === 'white' && ' bg-white text-black border border-gray-200')
  }

  switch (type) {
    case TypeButtons.SIGNOUT:
      return (
        <button onClick={() => signOut()} className={styles.button}>
          {children}
        </button>
      )
    case TypeButtons.SIGNIN:
    default:
      return (
        <button onClick={() => signIn(provider)} className={styles.button}>
          {children}
        </button>
      )
  }
}

export default ButtonProvider
