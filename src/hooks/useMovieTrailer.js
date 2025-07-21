
import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice'
import { useDispatch } from 'react-redux'

function useMovieTrailer(movieId) {

    const dispatch = useDispatch()
    // fetch trailer video

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
        const json = await data.json()

        const trailer = json.results.filter(video => video.type === "Trailer" && video.name === "Official Trailer")[0]

        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMovieVideos()
    }, [])
}

export default useMovieTrailer
