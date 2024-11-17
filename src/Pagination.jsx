import React, { useContext } from 'react'
import Mycontext from './Mycontext'

function Pagination() {
  const {page, pageSize , getNextPage ,getPrevPage} = useContext(Mycontext)
  return (
    <>
      <div className='PageChange flex justify-center align-middle gap-6 mb-20'>
      <button onClick={()=>getPrevPage() } className='text-white rounded-md bg-slate-950 py-2 px-6'>PREV</button>
      <p>{page} | {pageSize}</p>
      <button onClick={()=>getNextPage()} className='text-white rounded-md bg-slate-950 py-2 px-6'>Next</button>
      </div>
    </>
  )
}

export default Pagination