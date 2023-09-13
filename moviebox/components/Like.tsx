"use client"

import Image from 'next/image'
import React, { useState } from 'react'

export default function Like() {
    const [liked, setLiked] = useState<boolean>(false)
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {

        setLiked((like) => !like)
        console.log(" 0000000000000")
    }
    return (
        <>
            <button type='button' style={{ backgroundColor: `${liked ? "#BE123C" : "#F3F4F680"}` }} onClick={handleClick} className='bg-[#f3f4f665] z-20 p-1 rounded-full flex justify-center items-center'>
                <Image src='/Favorite.png' width={20} height={20} alt='heart' />
            </button>
        </>
    )
}


// import Image from 'next/image'
// import { useState, useEffect } from 'react'

// const Like = () => {
//     const [liked, setLiked] = useState<number>(10)
//     const handleClick = () => {

//         setLiked((like) => like + 20)
//     }
//     return (
//         <>
//             <button type='button' onClick={handleClick} className='bg-[#F3F4F680] z-20 hover:scale-105 p-1 rounded-full flex justify-center items-center'>
//                 <Image src='/Favorite.png' width={20} height={20} alt='heart' />
//             </button>
//             <span className='text-white'>{liked}</span>
//         </>

//     )
// }

// export default Like