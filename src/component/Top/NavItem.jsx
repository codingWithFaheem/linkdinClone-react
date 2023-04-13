import { Avatar } from '@mui/material'
import React from 'react'
import './NavItem.css'

const Navitem = ({Icon , title ,avatar}) => {
  return (
    <div className=' flex flex-col items-center text-gray-600 cursor-pointer hover:text-black '>
            {Icon && <Icon/> }
            {avatar && (
              <Avatar className=' object-contain h-6 w-6 headerIcon' src={avatar} />
            )}
           <p className=' font-bold text-xs'>{title} </p>
           
    </div>
  )
}

export default Navitem