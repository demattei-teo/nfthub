'use client'
import clsx from 'clsx'

interface ButtonProviderPros {
  children: React.ReactNode
  bgColor: 'black' | 'white'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function ButtonProvider({ children, bgColor, onClick }: ButtonProviderPros) {
  const styles = {
    button: clsx('py-3 items-center justify-center w-full sm:px-10 flex gap-2 rounded-full font-medium', bgColor === 'black' && 'bg-black text-white', bgColor === 'white' && ' bg-white text-black border border-gray-200')
  }

  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export default ButtonProvider
