import React from 'react'
import SideBar from '../components/sideBar';
import NavBar from '../components/NavBar';

function MainPage() {
  return (
    <div className='flex'>
        <div>
            <SideBar />
        </div>
        <div className='w-full'>
            <NavBar />
        </div>
    </div>
  )
}

export default MainPage;
