import React, { useEffect, useState } from 'react';
import FeedOptions from './FeedOptions'
import { Avatar } from '@mui/material';
import { Create, Image ,SmartDisplay ,DateRange , Newspaper } from '@mui/icons-material'
import { collection, getDocs ,addDoc} from 'firebase/firestore';
import Post from './Post';

import { db } from '../../config/firebase';
const Feed = () => {
  const [posts , setPosts ] = useState([]);
  const [input ,setInput] = useState('');
  const postItemRef = collection(db,"posts")
  const [inputField , setInputField] = useState(false) ;
 const inputFieldBgColor =  inputField ? 'bg-[#e4e5e9cc]'  :'bg-white'
  const getPostData = async () => {
    try{
       const data =  await  getDocs(postItemRef)
       const filterData = data.docs.map((doc) => {
          const  data = doc.data() ;
          return {
                name :data.name ,
                description : data.description ,
                image: data.image,
                message : data.message ,

          }
       })
       setPosts(filterData) 

          
    }
    catch (err){
      console.error(err) ;
    }
  }
  useEffect(()=> {

    getPostData()
   },[])
 
  const sendPost = async (e) => {
    e.preventDefault(e)
      try{
       addDoc(postItemRef , ({
              name: 'Faheem Khan',
              description:'Frontend | React Next Typscript Developer ' ,
              image:"https://img.freepik.com/premium-photo/portrait-handsome-anime-boy-avatar-computer-graphic-background-2d-illustration_67092-1984.jpg?w=740",
              message: input ,
      }))
  setInput("")

  }
  catch (err) {
      console.error(err)
  }

  getPostData()
  
}
  return (
    <div className=' border- border-[#123] '>

                     { /* == Feed input container ==*/}
                <div className='  w-[31vw]   px-4 py-3 rounded-[16px] mb-5 bg-white'>
                   <div className='  w-full flex '>
                              <Avatar  className='mt-2 cursor-pointer' src='https://img.freepik.com/premium-photo/portrait-handsome-anime-boy-avatar-computer-graphic-background-2d-illustration_67092-1984.jpg?w=740'/>
                        {/* ============   Input  ========= */}
                       <div className={`border-2   border-gray-300  inputFlex flex w-full p-2.5 pl-4 ml-4 ${inputFieldBgColor} text-gray-500  rounded-4xl`}>
                                        
                                          <Create />
                                          <form className=' flex w-full '
                                          onMouseOver={() => setInputField(true)}
                                          onMouseLeave={() => setInputField(false)}
                                          >
                                              <input className={`inputFle w-full border-none  h-[2rem] ml-2.5 outline-none font-semibold ${inputFieldBgColor}`} 
                                                     value= {input} 
                                                     type="text"
                                                      onChange={e => setInput(e.target.value)}
                                                     />
                                              <button onClick={sendPost}   type="submit" className=' hidden'>Send</button>
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
                             {/* == Post Field === */}
              {posts.map((post, index) =>  (
                     <Post  
                            key={index} {...post} />
              
                        
                ))
                        
               }  
          </div>
  )
}

export default Feed


