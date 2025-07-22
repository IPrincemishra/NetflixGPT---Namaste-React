import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function MovieCard({ posterPath }) {
    return (
        <div>
            <img
                src={IMG_CDN_URL + posterPath}
                alt="Poster"
                className='w-48 rounded'
            />
        </div>
    )
}

export default MovieCard
