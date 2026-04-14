import React from 'react'

export default function FormCard() {
  return (
    <>
    <div className='h-[313px] w-[670px] border border-gray-300 rounded-[10px] p-[20px] flex flex-col mt-[20px] ml-[55px]'>
        <div className='flex justify-between'>
            <p>Announcements</p>
            <div className='relative'>
              <input className='h-[23px] border border-[#E0E0E0] rounded-[3px] p-[12px] text-[12px] ' type="text" placeholder='Today' />
              <svg xmlns="http://www.w3.org/2000/svg" className='absolute top-[5px] right-[5px]' width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M4.47 9.4a.75.75 0 0 1 1.06 0l6.364 6.364a.25.25 0 0 0 .354 0L18.612 9.4a.75.75 0 0 1 1.06 1.06l-6.364 6.364a1.75 1.75 0 0 1-2.475 0L4.47 10.46a.75.75 0 0 1 0-1.06" clipRule="evenodd" /></svg>
            </div>
        </div>
        <div className='h-[40px] w-[600px] ml-[10px] bg-[#D3D3D34D] border border-[#E0E0E0] rounded-[8px] mt-[20px] text-[14px] p-[8px] py-[2px] flex items-center justify-between'>
            <div>
                <h4>Outing schedule for every departement</h4>
                <p className='text-[9px] ml-[4px] text-[#00000080]'>10 minutes ago</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" /></svg>
        </div>

        <div className='h-[40px] w-[600px] ml-[10px] bg-[#D3D3D34D] border border-[#E0E0E0] rounded-[8px] mt-[20px] text-[14px] p-[8px] py-[2px] flex items-center justify-between'>
            <div>
                <h4>Meeting with HR Department</h4>
                <p className='text-[9px] ml-[4px] text-[#00000080]'>1 day ago</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" /></svg>
        </div>  
        <div className='h-[40px] w-[600px] ml-[10px] bg-[#D3D3D34D] border border-[#E0E0E0] rounded-[8px] mt-[20px] text-[14px] p-[8px] py-[2px] flex items-center justify-between'>
            <div>
                <h4>IT Department support for UI / UX Designers - onboarding</h4>
                <p className='text-[9px] ml-[4px] text-[#00000080]'>1 day ago</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" /></svg>
        </div>
        <hr className='w-full mt-[20px] text-[#E0E0E0]'/>
        <h3 className='flex justify-center text-red-700 mt-[20px]'>See All Announcements</h3>
    </div>
    </>
  )
}
