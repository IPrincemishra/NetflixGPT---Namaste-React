import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector(store => store.movies)
    // console.log(movies);
    

    return movies.nowPlayingMovies && (
        <div className='bg-gray-950'>
            <div className='relative z-10 -mt-52'>
                <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
                <MovieList title="Upcoming" movies={movies.upcomingMovies} />
                <MovieList title="Popular" movies={movies.popularMovies} />
                <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer
