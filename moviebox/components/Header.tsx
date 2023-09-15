"use client"

import { Movie, SearchData } from '@/types/Types';
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { setInterval } from 'timers';





const Header = ({ movies }: { movies: SearchData }) => {
    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index => index + 1);
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    if (index > 4) setIndex(0)
    const changeIndex: any = (e: number) => setIndex(e)

    return (
        // <>
        //     <span>{index}</span></>
        <>
            <header className='w-full h-[85vh] object-cover relative'>
                {
                    movies.results.slice(0, 5).map((movie, i) => (
                        <div key={i} style={{ display: `${i !== index ? "none" : "block"}` }} >

                            <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt='header-image' layout='fill' objectFit='fill' className='w-full absolute inset-0 h-full object-cover' />
                            <div className='flex flex-col items-start gap-y-2 animate-slidedown md:gap-y-4 absolute top-[50%] sm:top-1/3 left-[10%] w-[300px] sm:w-[350px]'>
                                {/* <p className='text-3xl lg:text-5xl font-bold text-white'>John Wick 3 : Parabellum</p> */}
                                <p className='text-3xl lg:text-5xl font-bold text-white'>{movie.title}</p>
                                <div className='flex items-center justify-between gap-10'>
                                    <div className='text-gray-900 text-xs flex gap-2'>
                                        <Image src='/imdb.png' alt='imdb' width={35} height={17} />
                                        <span className='text-white'>{movie.vote_average * 10} / 100</span>
                                    </div>
                                    <div className='text-gray-900 text-xs flex gap-2'>
                                        <Image src='/orange.png' alt='imdb' width={16} height={17} />
                                        <span className='text-white'>{Math.floor(movie.popularity)}%</span>
                                    </div>
                                </div>
                                <p className='text-sm font-bold text-white'>{movie.overview.slice(0, 250)}</p>
                                <button className='flex items-center uppercase bg-rose-700 gap-2 px-5 py-[8px] rounded-[6px] text-sm font-bold text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="white" />
                                    </svg>
                                    <span>Watch trailer</span>
                                </button>
                            </div>
                            <div className='flex flex-col items-start gap-y-1 absolute top-[50%] translate-y-[-50%] right-[5%]'>
                                {
                                    movies.results.slice(0, 5).map((movies, i) => (

                                        <div onClick={() => changeIndex(i)} className='flex items-center cursor-pointer justify-center gap-2'>
                                            <i style={{ visibility: `${i !== index ? "hidden" : "visible"}` }} className='w-5 h-1 transition-all duration-700 bg-white rounded-md'></i>
                                            <span style={{ color: `${i !== index ? "#9CA3AF" : "white"}` }} className='text-gray-400 transition-all duration-700 text-sm font-bold'>{i + 1}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    ))
                }
            </header>
        </>
    )
}

export default Header