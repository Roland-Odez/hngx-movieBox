import Image from 'next/image'
import React from 'react'

const MovieCard = () => {
    return (
        <div className='flex flex-col rounded-md gap-y-2 md:gap-y-3 hover:scale-105 transition-[transform] duration-700 hover:shadow-md'>
            <div className='relative object-cover'>
                <Image src='/Poster.png' alt='movie post' width={486} height={720} className='w-ful h-full block object-cover' />
                <div className='absolute top-4 w-full flex items-center justify-between px-4'>
                    <span className='text-gray-900 text-xs font-bold bg-gray-300 rounded-xl p-1 opacity-75'>TV SERIES</span>
                    <button><Image src='/Favorite.png' alt='favorite' width={30} height={30} /></button>
                </div>
            </div>
            <div className='flex flex-col gap-y-2 md:gap-y-3 p-2'>
                <p className='text-xs font-bold text-gray-400'>USA, 2016 - Current</p>
                <p className='text-[18px] font-bold text-gray-900'>Stranger Things</p>
                <div className='flex items-center justify-between'>
                    <div className='text-gray-900 text-xs flex gap-2'>
                        <Image src='/imdb.png' alt='imdb' width={35} height={17} />
                        <span>86.0 / 100</span>
                    </div>
                    <div className='text-gray-900 text-xs flex gap-2'>
                        <Image src='/orange.png' alt='imdb' width={16} height={17} />
                        <span>80%</span>
                    </div>
                </div>
                <p className='text-xs font-bold text-gray-400'>Action, Adventure, Horror</p>
            </div>
        </div>
    )
}

export default MovieCard