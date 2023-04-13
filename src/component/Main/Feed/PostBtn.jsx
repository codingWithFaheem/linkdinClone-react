import React from 'react'
const PostBtn = ({Icon , title }) => {
  return (
    <div className='cursor-pointer flex hover:bg-gray-300 rounded-xsl px-3 p-2'>
                <Icon  className = ' text-gray-400'/>
                <p className=' text-gray-600 text-nm ml-1 '>{title}</p>
    </div>
  )
}

export default PostBtn