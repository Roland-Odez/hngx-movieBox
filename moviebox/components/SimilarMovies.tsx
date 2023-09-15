import { Movie, SearchData } from '@/types/Types';
import { date } from '@/utils/date';
import Image from 'next/image'
import React from 'react'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDBkOGZjNTNmNDJmNmU4NTBmNTAxYzBkNGU5M2U4MiIsInN1YiI6IjY1MDAyNTA4ZmZjOWRlMGVlMTc2ZDE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HZXT-pCiJcknlN8UumZqN9N3j757icvvsImievf0a1Q'
    }
};


const getSimilarMovie = (id: number) => {

    return fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}

const SimilarMovies = async ({ id }: { id: number }) => {
    const data: SearchData = await getSimilarMovie(id)

    return (
        <div className='grid grid-cols-3 rounded-xl relative rounded-t-md'>
            {
                data.results.slice(0, 3).map((movie: Movie) => (
                    <Image src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} className='block object-cover w-full' alt='movie' width={120} height={229} />

                ))
            }
            <div className='rounded-[10px] bg-[#12121280] flex items-center justify-center gap-2 absolute bottom-0 w-full p-2'>
                <Image src='/w-list.png' alt='w-list' width={23} height={23} />
                <p className='text-sm text-[#E8E8E8] font-medium'>The Best Movies and Shows in {date()}</p>
            </div>
        </div>
    )
}

export default SimilarMovies