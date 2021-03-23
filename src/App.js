import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/navbar';
import Main from './components/main/main';
import Sidenav from './components/layout/sidenav';
import React, { useState} from 'react'

const App = ()=> {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  
  const closeSidebar = () =>{
    setSidebarOpen(false);
  };
          return (
              <div className="container">
                <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
                <Main/>
                <Sidenav sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
                
              </div>
          );
      };
  
  
  

export default App;
