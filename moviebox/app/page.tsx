import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {

  return (
    <div className='relative'>
      <Navbar />
      <header className='w-full h-[85vh] object-cover relative'>
        <Image src='/header-img.png' alt='header-image' width={1440} height={600} className='w-full absolute inset-0 h-full object-cover' />
        <div className='flex flex-col items-start gap-y-2 md:gap-y-4 absolute top-[50%] sm:top-1/3 left-[10%] w-[300px] sm:w-[350px]'>
          <p className='text-3xl lg:text-5xl font-bold text-white'>John Wick 3 : Parabellum</p>
          <div className='flex items-center justify-between gap-10'>
            <div className='text-gray-900 text-xs flex gap-2'>
              <Image src='/imdb.png' alt='imdb' width={35} height={17} />
              <span className='text-white'>86.0 / 100</span>
            </div>
            <div className='text-gray-900 text-xs flex gap-2'>
              <Image src='/orange.png' alt='imdb' width={16} height={17} />
              <span className='text-white'>80%</span>
            </div>
          </div>
          <p className='text-sm font-bold text-white'>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          <button className='flex items-center uppercase bg-rose-700 gap-2 px-5 py-[8px] rounded-[6px] text-sm font-bold text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="white" />
            </svg>
            <span>Watch trailer</span>
          </button>
        </div>
      </header>
      <main className='py-12 lg:py-16 px-4 md:px-14 lg:px-24'>
        <Feature />
      </main>
      <Footer />
    </div>
  )
}
