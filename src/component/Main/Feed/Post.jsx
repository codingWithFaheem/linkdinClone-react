import { Avatar } from '@mui/material'
import React from 'react'
import {ThumbUpOffAlt, Comment , Autorenew , Send}  from '@mui/icons-material'
import PostBtn from './PostBtn'
const Post = ({name , description , message , image }) => {
  return (
    <div className=' bg-white  ml-s4 rounded-xsl'> 

                {/* ======= Post Header */}
                <div className=" flex  items-center p-4 w-full cursor-pointer">
                        <Avatar  className=' rounded-4xl cursor-pointer' 
                        src={image}
                        />
                             {/* ====== Post Info ====== */}
                    <div className=' leading-4 ml-2 flex flex-col items-start'>
                        <p className='  font-bold text-gray-700'>{name}</p>
                        <p className=' text-xs  text-gray-500'>{description}</p>
                    </div>
                </div>

                    {/* ===== Post Body */}
                
                <div className=" mt-1 py-2  border-2  "> 

                        <p className="px-4 text-nm text-gray-600 font-medium cursor-text" >{message}</p>
                
                           {/* ============= Image  Sec If there is image */}
                 </div>
              
              
                    {/* ===== Post Buttons */}
        
                <div className=" flex p-3 mt-2 items-center justify-around w-full bg-white">
                                
                                <PostBtn  Icon = {ThumbUpOffAlt} 
                                        title = 'like'
                                        color = ''
                                />
                                <PostBtn  Icon = {Comment} 
                                        title = 'Comment'
                                        color = ''
                                /> 
                                <PostBtn  Icon = {Autorenew} 
                                title = 'Repost'
                                color = ''
                                /> 
                                <PostBtn  Icon = {Send} 
                                title = 'Send'
                                color = ''
                        />
                        
                </div>
    
    </div>
  )
}

export default Post