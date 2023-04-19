import React from 'react'
import NavItem from './NavItem';
import {selectUser} from '../../features/userSlice';
import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { useSelector } from 'react-redux';

const Header = () => {
 const  user = useSelector(selectUser) ; 

  return (
    <header className='bg-white border-b-2 '>
    <nav className='   max-w-6xl z-999
                      h-16 m-auto   flex items-center justify-between px-5 '>
      <div className=" flex items-center">
        <img  className=' mr-3 object-contain h-10'
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="logo" />
              <div className=' 
                              rounded-[5px]
                              h-[22px]
                              flex

                              text-gray-500
                              items-center
                              justify-between
                                  p-[10px] '>
                  <SearchIcon />
                  <input type='text' className=' border-none outline-none bg-none'/>
              </div>
        </div>
        {!user   ?
        <div className='   w-[48%] flex items-center justify-evenly'>
              <NavItem  title='Home' Icon ={HomeRoundedIcon} />
                <NavItem  title='My Networks' Icon ={SupervisorAccountRoundedIcon} />
                <NavItem  title='Jobs' Icon ={BusinessCenterRoundedIcon} />
              <button className=' border-l-2 border-gray-300 rounded-full hover:bg-gray-200  w-[7rem] h-[3.5rem]  text-[16px] font-bold text-gray-500 '>Join now </button>
              <button className="border-[1px] text-[19px] font-bold rounded-full border-blue-600 text-[#4e73db] w-[8rem] h-[3.5rem]">Sign in</button>

      </div>:
                  <div className=' flex 
            items-center  
            justify-evenly
            w-3/6 ml-40 
            border-0 border-green-400'>  
            <NavItem  title='Home' Icon ={HomeRoundedIcon} />
            <NavItem  title='My Networks' Icon ={SupervisorAccountRoundedIcon} />
            <NavItem  title='Jobs' Icon ={BusinessCenterRoundedIcon} />
            <NavItem  title='Meassaging' Icon ={ForumRoundedIcon} />
            <NavItem  title='Notification' Icon ={NotificationsRoundedIcon} />
            <NavItem  avatar='https://img.freepik.com/premium-photo/portrait-handsome-anime-boy-avatar-computer-graphic-background-2d-illustration_67092-1984.jpg?w=740'
                title = 'me' />
         </div>                                                                                                  }
      </nav>
     </header>
  )
}

export default Header