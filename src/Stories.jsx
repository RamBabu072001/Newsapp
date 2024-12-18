import React, { useEffect } from 'react'
import { useContext } from 'react'
import Mycontext from './Mycontext'
import { FaUserCircle } from "react-icons/fa";
import Image from "./assets/noimge.jpg"

import loading from './assets/loading.gif'

function Stories() {
     
    const {articles , isLoading , q , totalSize} = useContext(Mycontext)

    if(isLoading)
    {
        return(
            <>
            <div className='flex justify-center align-middle'><img src={loading} /></div>
            </>
        )
    }

  return (
    <>
   <div className="bg-white py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Welcome to NewsSite</h2>
          <p className="mt-2 text-lg text-gray-600">NewsSite | News releted to - "{q}"  </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((post,index) => (
            <article key={index} className="flex max-w-xl flex-col items-start justify-between">
              <img src={!post.urlToImage ?Image: post.urlToImage} alt="" className='h-60'></img>
              <div className="flex items-center gap-x-4 text-xs">
                <time  className="text-gray-500">
                  {post.publishedAt}
                </time>
                <a
                  href={post.url}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.url}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
              <FaUserCircle  size="30"/>

                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href="">
                      <span className="absolute inset-0" />
                      {post.author? post.author : "anonyoms"}
                    </a>
                  </p>
                  <p className="text-gray-600">{}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Stories