import { Title } from '@/components'
import Image from 'next/image'

function NotFound() {
  return (
    <>
      <main className='py-16'>
        <section className='wrapper grid justify-items-center gap-5 items-center md:grid-cols-2'>
          <div className='relative w-full  md:col-start-2 md:col-end-3 h-[min(73vw,_502px)]'>
            <Image src='/images/notFound.png' alt='lottie 404 not found' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw' className='object-contain' />
          </div>
          <div className='flex md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 flex-col gap-4 text-gray-400'>
            <Title headingLevel='h1' highlightTitle='OOPS!!' />
            <h2 className='text-center md:text-left text-fluid-xl-2 font-semibold'>404 error</h2>
            <p className='text-center md:text-left text-fluid-xs'>The page you are looking for can not found</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default NotFound
