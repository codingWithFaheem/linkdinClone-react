import React from 'react';
import './App.css';
 import Sidebar from './component/Main/SideBar/SideBar';
 import Feed from './component/Main/Feed/Feed';
import Header from './component/Top/Header';
import { useSelector } from 'react-redux';
import {selectUser} from './features/userSlice';
import Login from './Login';

function App() {
 const  user = useSelector(selectUser) ; 

  return (
    <div className="App bg-bg-primery">

              {/*== Header === */}
              <Header />
              {!user ? <Login /> :     
              <div className=" m-auto   w-[1140px] h-screen flex  gap-x-6 pt-6 ">
                   
                   {/*== SideBar == */}
                         <Sidebar />
                   {/*== SideBar == */}

                   {/*== Feed Feild  Post Sec == */}
                          <Feed />
                   {/*== Feed Feild  Post Sec == */}
              </div>
            }
    </div>
  );
}

export default App;
