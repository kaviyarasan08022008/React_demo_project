import React from 'react'
import profileImg from "../assets/profile.png"

function NavBar() {
  return (
    <div className='flex justify-between items-center px-[30px] py-[25px] border-b-[1.5px] border-gray-300'>
      <h1 className='text-medium'>Welcome Back, Kavi</h1>
      <div className='flex items-center gap-[20px]'>
        <div className='flex items-center'>
            <svg className='border-[1.5px] border-gray-300 border-r-0 p-[5px] text-gray-500 rounded-l-xl' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" /></svg>
            <input type="text" className='border-[1.5px] border-l-0 h-[36px] rounded-r-xl border-gray-300 outline-0' placeholder='Search'/>
        </div>
        <div className='h-[35px] w-[35px] rounded-[50%] '>
            <img className='h-[35px] w-[35px] object-cover object-center' src={profileImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default NavBar
