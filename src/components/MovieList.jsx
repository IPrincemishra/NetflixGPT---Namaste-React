import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ title, movies }) {


    return movies && (
        <div className="relative flex justify-center  border-b-4 pb-2 border-b-[#d81f2580]">

            <div className="relative w-11/12 py-12">
                <h1 className="text-2xl font-bold text-white mb-6">{title}</h1>
                <div
                    className="flex overflow-x-scroll outline-none gap-7 scrollbar-hidden"
                    tabIndex={0} >
                    {movies.map(movie => (
                        <div key={movie.id} className="flex-shrink-0 shadow">
                            <MovieCard posterPath={movie.poster_path} />
                        </div>
                    ))}
                </div>
                {/* Optional right fade overlay for effect */}
                <div className="pointer-events-none absolute right-0 top-24 h-[220px] w-16 bg-gradient-to-l from-gray-950 opacity-70 z-20" />
            </div>
        </div>
    )
}

export default MovieList
