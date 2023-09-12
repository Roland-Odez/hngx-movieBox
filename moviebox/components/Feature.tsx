import Link from 'next/link'
import React from 'react'
import MovieCard from './MovieCard'

const Feature = () => {
    return (
        <section className='flex flex-col gap-y-12'>
            <div className='flex items-center justify-between'>
                <span className='text-black text-lg md:text-2xl lg:text-4xl font-bold'>Featured Movie</span>
                <Link href='/all-top-movies' className='flex items-center justify-center gap-2 text-rose-700 text-sm lg:text-[18px]'><span className='text-sm lg:text-[18px]'>See more</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg></Link>
            </div>
            <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:grid-rows-3 gap-x-5 md:gap-x-10 gap-y-12 md:gap-y-24'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </section>
        </section>
    )
}

export default Feature