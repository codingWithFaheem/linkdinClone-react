import React from 'react'
import NavItem from './NavItem';
import SearchIcon from '@mui/icons-material/Search';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
const Header = () => {
  return (
    <header className='bg-white border-b-2'>
    <nav className='  max-w-6xl z-999
                      h-16 m-auto   flex items-center px-5 '>
        <img  className=' mr-3 object-contain h-10'
        src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="logo" />
        <div className=' 
                         rounded-[5px]
                         h-[22px]
                         flex
                         text-gray-500
                         items-center
                            p-[10px] '>
            <SearchIcon />
            <input type='text' className=' border-none outline-none bg-none'/>
        </div>
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
      </div>
    </nav>
</header>
  )
}

export default Header