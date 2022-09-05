import React from 'react'
import { useGlobalContext } from './context'

const Pagination = () => {
  const {page, nbPages, getPrePage, getNextPage} = useGlobalContext();
  return (
    <>
      <div className='pagination'>
        <button className='prev' onClick={()=>getPrePage() } >Prev</button>
        <div className='page-number'>
          {page} of {nbPages}
        </div>
        <button className='next' onClick={()=>getNextPage()} >Next</button>
      </div>
    </>
  )
}

export default Pagination