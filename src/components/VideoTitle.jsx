import React from 'react';

const VideoTitle = ({ title, overview }) => (
    <div className="w-full h-[100vh] flex items-center bg-gradient-to-r from-black/70 to-transparent relative z-10">
        <div className="mx-40 w-5/12 text-white p-5">
                <h1 className="text-5xl font-extrabold">{title}</h1>
                <p className="py-6 ">{overview}</p>
                <div className="w-full flex justify-center gap-10">
                    <button
                        type="button"
                        className="bg-white text-black py-3 text-lg px-8 rounded cursor-pointer hover:bg-black hover:text-white transition duration-300">
                        ▶ Play
                    </button>
                    <button
                        type="button"
                        className="bg-black/15 py-3 text-lg px-8 rounded cursor-pointer hover:bg-amber-50 hover:text-black transition duration-300">
                        More Info
                    </button>
            </div>
        </div>
    </div>
);

export default VideoTitle;
