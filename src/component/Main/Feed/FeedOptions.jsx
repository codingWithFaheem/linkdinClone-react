import React from 'react'

const FeedOptions = ({title ,Icon , colorName}) => {
  return (
    <div className=' flex cursor-pointer  hover:bg-gray-200 p-2 rounded-xsl'>
                <Icon  style = {{color:colorName}}/>
                <p className=' pl-3 text-gray-500 font-normal text-md '>{title}</p>
    </div>
  )
}

export default FeedOptions