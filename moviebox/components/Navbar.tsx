"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Movie, SearchData } from '@/types/Types';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    }
};

const Navbar = () => {
    const [search, setSearch] = useState<boolean>(false)
    const [results, setResults] = useState<SearchData | null>(null)
    const [isLoading, setIsloading] = useState<boolean>(false)
    const [text, setText] = useState<string>('')
    const inputRef = useRef<HTMLInputElement | null>(null)



    const makeSearchActive = () => {
        setSearch(true)
        setTimeout(() => makeFocus(), 0)
    }
    const makeFocus = () => inputRef.current?.focus()
    const clearInput = () => setText('')

    useEffect(() => {
        const fetcher = () => {
            setIsloading(true)
            fetch(`https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=en-US&page=1`, options)
                .then(res => res.json())
                .then(res => {
                    setIsloading(false)
                    setResults(res)
                })
                .catch(res => console.log(res))
        }
        if (text !== "") fetcher()
        return () => {

        }
    }, [text])



    const handleChange: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLButtonElement>) => {
        setText(e.currentTarget.value)
        console.log("something jsut changed")
    }
    return (
        <>
            <nav className='flex items-center justify-center py-4 lg:py-8 absolute top-0 w-full z-30'>
                <div className='w-[90%] flex justify-between gap-3'>
                    <Link href='/' className='flex gap-6 justify-center items-center'>
                        <Image src='/logo.png' alt='logo' width={40} height={50} />
                        <span className='hidden text-white lg:block text-2xl font-medium'>MovieBox</span>
                    </Link>
                    <div onClick={makeSearchActive} className='flex-1 lg:flex-none hidden md:flex lg:w-[525px] p-1 lg:py-[6px] lg:px-[10px] justify-between items-center rounded-[6px] border-[2px] border-gray-300'>
                        <input type="text" className='outline-none w-full text-white placeholder:text-base placeholder:text-white bg-transparent' name="search" id="search" placeholder='What do you want to watch?' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='flex items-center gap-3 md:gap-6 justify-center'>

                        <span className='text-base text-white hidden md:block'>Sign in</span>
                        <button onClick={makeSearchActive} className='relative inline-block md:hidden outline-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <circle cx="18" cy="18" r="18" fill="#BE123C" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <div className='relative inline-block'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <circle cx="18" cy="18" r="18" fill="#BE123C" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
                {
                    search && (
                        <div className='overflow-y-auto bg-[#000000] fixed top-0 h-screen w-full p-2'>
                            <button onClick={() => setSearch(false)} className='text-white font-medium text-base bg-rose-600 p-1 px-2 rounded-md'>close</button>
                            <div className='flex items-center justify-center w-full'>
                                <div className='w-full flex lg:w-[525px] p-1 py-3 lg:py-[6px] lg:px-[10px] justify-between items-start border-b-[1px] border-gray-300'>
                                    <input ref={inputRef} onChange={handleChange} value={text} type="text" className='outline-none w-full text-white placeholder:text-base placeholder:text-white bg-transparent' name="search" id="search" placeholder='What do you want to watch?' />
                                    <button onClick={clearInput} className='text-white font-medium text-sm bg-rose-600 w-[26px] h-[26px] rounded-full'>X</button>
                                </div>

                            </div>
                            {
                                isLoading === true ?
                                    (<Image src='/loader.svg' className='lg:w-[60px] lg:h-[60px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' width={50} height={50} alt='preloader' />)
                                    :
                                    (

                                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 py-10 items-center justify-center px-4 lg:px-10'>
                                            {

                                                results?.results.map((movie) => (

                                                    <Link href={`/movies/${movie.id}`} className='flex gap-2'>
                                                        <div className='w-[70px] sm:w-[100px] object-cover bg-blue-700 h-[70px] sm:h-[100px] rounded-md'>
                                                            <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} width={100} height={100} className='rounded-md object-cover w-full h-full' alt='movie' objectFit='fill' />
                                                        </div>
                                                        <div className='text-white'>
                                                            <h1>{movie.title}</h1>
                                                            <p>{movie.release_date.split("-")[0]}</p>
                                                        </div>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    )
                            }
                        </div>
                    )
                }
            </nav >
        </>
    )
}

export default Navbar