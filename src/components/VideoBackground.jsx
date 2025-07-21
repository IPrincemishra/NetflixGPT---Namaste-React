import { API_OPTIONS } from '../utils/constants'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackground = ({ movieId }) => {

    useMovieTrailer(movieId);
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)


    return (
        <div className='absolute top-0 z-0 w-full h-screen overflow-hidden'>
            <iframe
                className='w-full h-full  scale-150 '
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&vq=large&loop=1`}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
            />

        </div>
    )
}

export default VideoBackground
