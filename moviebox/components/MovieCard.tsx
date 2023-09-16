import Image from 'next/image'
import Like from './Like'
import { Movie } from '@/types/Types'
import Link from 'next/link'

async function getMovie(id: number) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        }
    };

    return fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw (`Movie of ID ${id} not found`)
            }
        })
        .then(response => response)
        .catch(err => console.error(err));
}

const MovieCard = async (props: { data: Movie }) => {
    const movie: any = await getMovie(props.data.id)
    return (
        <div className='relative animate-slidedown delay-[3000ms]' data-testid='movie-card'>
            <div className='absolute top-4 w-full flex items-center justify-end px-4 z-10'>
                <Like />
            </div>
            <Link href={`/movies/${props.data.id}`} className='flex flex-col rounded-md gap-y-2 md:gap-y-3 md:hover:scale-105 transition-[transform] duration-700 hover:shadow-md'>
                <div className=' object-cover'>
                    <Image data-testid='movie-poster' src={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.data.poster_path}`} alt='movie post' width={486} height={720} className='w-ful h-full block rounded-t-md object-cover' />
                </div>
                <div className='flex flex-col gap-y-2 md:gap-y-3 p-2'>
                    <p className='text-xs font-bold text-gray-400'>{movie.production_countries[0].iso_3166_1}, <span data-testid='movie-release-date'>{props.data.release_date.split('-')[0]}</span> - Current</p>
                    <p className='text-[18px] font-bold text-gray-900' data-testid='movie-title'>{props.data.title}</p>
                    <div className='flex items-center justify-between'>
                        <div className='text-gray-900 text-xs flex gap-2'>
                            <Image src='/imdb.png' alt='imdb' width={35} height={17} />
                            <span>{props.data.vote_average * 10} / 100</span>
                        </div>
                        <div className='text-gray-900 text-xs flex gap-2'>
                            <Image src='/orange.png' alt='imdb' width={16} height={17} />
                            <span>{Math.floor(props.data.popularity)}%</span>
                        </div>
                    </div>
                    <p className='text-xs font-bold text-gray-400 gap-1 flex'>
                        {
                            movie.genres.map((genre: { id: number, name: string }) => (
                                <span>{genre.name}</span>
                            ))
                        }
                    </p>
                </div>
            </Link>

        </div>
    )
}

export default MovieCard