import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

function GptSearchBar() {

    const langKey = useSelector(store => store.config.lang)

    return (
        <div className='pt-[10%] flex items-center justify-center'>
            <form
                className='w-1/2 rounded-2xl bg-black py-4 px-4 grid grid-cols-12 items-center justify-center gap-5'
                onSubmit={e => e.preventDefault()}>
                <input
                    type="text"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                    className='bg-white py-3 px-2 text-lg rounded-lg col-span-9 outline-none'
                />
                <button className='py-3 cursor-pointer bg-[#D81F26] text-white text-lg rounded-lg col-span-3'>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
