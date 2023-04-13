import React from 'react'

const ReItems= ({Item}) => {
  return (
    <div className=' flex text-sm text-gray-500  font-bold cursor-pointer mb-1 p-1 hover:bg-slate-200 hover:text-black '>
          <span>#</span>
          <p>{Item}</p>
    </div>
  )
}

export default ReItems