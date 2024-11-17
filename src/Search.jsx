import React, { useContext } from 'react'
import Mycontext from './Mycontext'
import { CiSearch } from "react-icons/ci";
function Search() {
  const { q, SearchPost } = useContext(Mycontext)
  return (
    <>
      <div className='flex align-middle justify-center '>
        <div>
          <form>
            <div className='relative'>
            <input className='pl-10 mt-10 pr-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md  focus:outline-none focus:ring-1  focus:ring-gray-500 focus:border-transparent w-[19rem]  sm:w-[26rem]'  placeholder='Search...'  onChange={(e)=>{SearchPost(e.target.value)}}/>
            <span className='absolute left-0 mt-10 p-3 text-gray-700'><CiSearch size={20}/></span>
            </div>
          </form>
            
        </div>
      </div>
    </>
  )
}

export default Search