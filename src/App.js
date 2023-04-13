import React from 'react';
import './App.css';
import Header from './component/Top/Header';
import Sidebar from './component/Main/SideBar/SideBar';
import Feed from './component/Main/Feed/Feed';

function App() {
  return (
    <div className="App bg-bg-primery">

              {/*== Header === */}
              <Header />
              <div className=" m-auto   w-[1140px] h-screen flex  gap-x-6 pt-6 ">
                   
                   {/*== SideBar == */}
                         <Sidebar />
                   {/*== SideBar == */}

                   {/*== Feed Feild  Post Sec == */}
                        <Feed />
              </div>
    </div>
  );
}

export default App;
