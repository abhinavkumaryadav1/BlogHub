import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full rounded-xl p-4 bg-white/60 backdrop-blur shadow-xl border border-black-900 hover:shadow-2xl hover:scale-105 hover:border-black transition-all duration-300 ease-in-out cursor-pointer'>
            <div className='w-full h-[220px] flex justify-center items-center mb-4'>

                <img src={appwriteService.getFileView(featuredImage)} alt={title}
                className='rounded-xl w-full h-full object-cover ' />

            </div>
            <h2
            className='text-xl font-bold text-cyan-900 drop-shadow'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard