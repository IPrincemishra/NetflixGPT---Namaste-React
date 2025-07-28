import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

function GptSearch() {
    return (
        <div>
            <div className="absolute top-0 -z-10">
                <img src={BG_URL} alt="BG IMG" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch