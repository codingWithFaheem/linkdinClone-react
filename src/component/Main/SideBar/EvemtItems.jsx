import React from 'react'

const EvemtItems = ({title}) => {
  return (
    <div className=' flex items-center text-sm text-gray-500  font-bold cursor-pointer mb-1 p-1 hover:bg-slate-200 hover:text-black '>
        <span>#</span>
        <p>{title}</p>
    </div>
  )
}

export default EvemtItems