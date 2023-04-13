import React from 'react'
import FeedOptions from './FeedOptions'
import { Avatar } from '@mui/material';
import { Create, Image ,SmartDisplay ,DateRange , Newspaper } from '@mui/icons-material'

const Feed = () => {
  return (
    <div className=' border- border-[#123] '>

                     { /* == Feed input container ==*/}
                <div className='  w-[31vw]   px-4 py-3 rounded-[16px] mb-5 bg-white'>
                   <div className='  w-full flex '>
                              <Avatar  className='mt-2 cursor-pointer' src='https://img.freepik.com/premium-photo/portrait-handsome-anime-boy-avatar-computer-graphic-background-2d-illustration_67092-1984.jpg?w=740'/>
                        {/* ============   Input  ========= */}
                       <div className="border-2   border-gray-300  inputFlex flex w-full p-2.5 pl-4 ml-4 hover:bg-[#e4e5e9cc]   bg-white text-gray-500  rounded-4xl">
                                        
                                          <Create />
                                          <form className=' flex w-full '>
                                              <input className='inputFlex border-none ml-2.5 outline-0 font-semibold hover:bg-[#e4e5e9cc]' 
                                                    //  value= {input} 
                                                     type="text"
                                                    //  onChange={e => setInput(e.target.value)}
                                                     />
                                              <button  type="submit" className=' hidden'>Send</button>
                                          </form>
                                      </div>
                      </div>          
                          {/* ==== Feeed Option */}
                         
                                <div className="  flex justify-start items-center  gap-x-7  w-full mt-2.5  ">         
                                      <FeedOptions className = '' title='Photo' Icon ={Image}  colorName = ' rgb(90 165 290 )'/>
                                      <FeedOptions className = '' title='Video' Icon ={SmartDisplay} colorName = 'rgb(22 163 74 )'/>
                                      <FeedOptions className = '' title='Audio event' Icon ={DateRange} colorName = 'rgb(202 138 4)'/>
                                      <FeedOptions className = '' title='Write article' Icon ={Newspaper} colorName = ' rgb(234 88 12 )'/>
                                </div>
                     </div>
          </div>
  )
}

export default Feed

