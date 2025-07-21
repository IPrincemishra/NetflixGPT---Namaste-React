import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (movies === null) return;

    console.log(movies);
    

    // const randomMovie = Math.floor(Math.random() * 20) + 1;


    const mainMovies = movies[1]
    console.log(mainMovies);

    const { original_title, overview, id } = mainMovies

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer
