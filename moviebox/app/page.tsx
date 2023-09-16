import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import { SearchData } from '@/types/Types'
import Image from 'next/image'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  }
};
const getUpcomingMovies: any = () => {
  return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => response)
    .catch(err => console.error(err));
}


export default async function Home() {
  const movies: SearchData = await getUpcomingMovies()
  return (
    <div className='relative no-scrollbar'>
      <Navbar />
      <Header movies={movies} />
      <main className='py-12 lg:py-16 px-4 md:px-14 lg:px-24'>
        <Feature />
      </main>
      <Footer />
    </div>
  )
}
