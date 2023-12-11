import Image from 'next/image'
import { Button, Title } from '..'

interface SuscribeFormProps {
  title: string
  highlightTitle: string
  description: string
  button: string
  placeHolderInput: string
}

function SuscribeForm({ placeHolderInput, title, highlightTitle, description, button }: SuscribeFormProps) {
  return (
    <section className='wrapper'>
      <div className='relative py-16 p-4 items-center justify-center gap-8 flex flex-col bg-transparent border border-gray-500 w-full rounded-[32px] lg:px-52'>
        <Image className='absolute z-10 bottom-4 right-4 lg:bottom-10 lg:right-20' width={44} height={44} src='/shapes/shape10.png' alt='shape' />
        <Image
          className='absolute z-10 top-28 right-4 lg:top-10
        lg:right-32'
          width={44}
          height={44}
          src='/shapes/shape7.png'
          alt='shape'
        />
        <Image className='absolute z-10 bottom-28 left-4 lg:bottom-10 lg:left-20' width={44} height={44} src='/shapes/shape9.png' alt='shape' />
        <Image className='absolute z-10 top-24 left-4 lg:top-10 lg:left-32' width={44} height={44} src='/shapes/shape8.png' alt='shape' />
        <Title title={title} highlightTitle={highlightTitle} headingLevel='h5' />
        <p className='text-fluid-xs z-20 leading-fluid-xs text-center text-gray-400'>{description}</p>
        <form className='flex lg:flex-row z-20 flex-col gap-4'>
          <input type='text' placeholder={placeHolderInput} className='p-3 rounded-3xl bg-gray-800' />
          <Button measure='small'>{button}</Button>
        </form>
      </div>
    </section>
  )
}

export default SuscribeForm
