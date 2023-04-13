import { Avatar } from '@mui/material'
import React from 'react'

import AddIcon from '@mui/icons-material/Add';
import EvemtItems from './EvemtItems';
import ReItems from './ReItem';
const Sidebar = () => {
  return (
    <div className=' w-[11vw]
                    rounded-xsl
                    text-center
                     h-fit
                     '
                    >
                    {/* SideBar Top */}
              <div className=' rounded-t-xsl bg-white
                rounded-xsl
                text-center h-fit
                flex
                flex-col items-center
                rounded-tl-xsl
                pb-2.5
                hover:cursor-pointer

           ' >
                          <img className='centerImg h-15 w-full
                                          rounded-t-xsl
                                          object-cover
                                          mb-[-12px]
                                          '
                                  src="https://watermark.lovepik.com/photo/20211122/large/lovepik-mountain-scenery-picture_500718147.jpg" alt="" />
                            <Avatar  className=' mb-2.5 ' src='https://img.freepik.com/premium-photo/portrait-handsome-anime-boy-avatar-computer-graphic-background-2d-illustration_67092-1984.jpg?w=740'/>
                            <p className=' font-bold text-lg'>FaheemSami</ p>
                            <p className='  font-bold text-xs text-gray-600'>faheemsami213@gmail.com</ p>

         </div>
                    {/* SideBar State */}
        <div className=' p-2.5 mb-2.5 
                         border-1 border-gray-300
                         bg-white first-letter 
                         rounded-b-xsl

                         '       >
            <div className=' mt-2.5 flex justify-between'>
                <p className=' text-gray-500 font-semibold text-sm '>Who Viewed you</p>
                <p className=' font-bold text-blue-500 text-sm'>2,534</p>
            </div>
            <div className=' mt-2.5 flex justify-between '>
                <p className=' text-gray-500 font-semibold text-sm'> Post View</p>
                <p className=' font-bold text-blue-500 text-sm'>24,323</p>
            </div>
                
        </div>
                    {/* SideBar Recemt Sec */}
          <div className=' text-left p-2.5 border-1 border-gray-300 bg-white rounded-xsl mt-3  '>
              <h3>Recent</h3>
              <ReItems Item='100daysofcodingchallage' />
              <ReItems Item='webdevelopment' />
              <ReItems Item='softwaredevelopment' />
              <ReItems Item='internship' />
              <ReItems Item='frontend' />


          </div>  
                    {/* SideBar Event Sect*/}
                    <div className='text-left p-2.5 border-1 border-gray-300 bg-white rounded-xsl mt-3  '>
                        <div className=' flex items-center justify-between'>
                          <h5 className=' font-bold text-blue-500'>Event</h5>
                          <AddIcon  className=' text-gray-600 hover:text-black hover:cursor-pointer'/>
                        </div>
                          <EvemtItems  title='hacathoninberlin'/>
                          <EvemtItems  title='workshop'/>
                          <EvemtItems  title='internationaljob'/>


                    </div>

    </div>
  )
}

export default Sidebar