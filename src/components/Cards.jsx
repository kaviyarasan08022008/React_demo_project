import React from 'react'

export default function Cards() {
    return (
        <div className='flex ml-[20px] mt-[5px] list-none'>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M13.2 2.65a2 2 0 0 0-2.4 0l-7 5.25A2 2 0 0 0 3 9.5V19a2 2 0 0 0 2 2h3.9a1.1 1.1 0 0 0 1.1-1.1V15a2 2 0 1 1 4 0v4.9a1.1 1.1 0 0 0 1.1 1.1H19a2 2 0 0 0 2-2V9.5a2 2 0 0 0-.8-1.6z" /></g></svg></li>
            <li> | Home</li>
            <li> | Dashboard</li>
            <div className='flex gap-[30px] py-[40px] ml-[-115px]'>
                <div className='h-[140px] w-[200px] bg-white-600 shadow-[0_4px_20px_rgba(0,0,0,0.25)] bg-[#FFEFE7]  rounded-[10px] p-[20px] '>Openings</div>
                <div className='h-[140px] w-[200px] bg-white-600 shadow-[0_4px_20px_rgba(0,0,0,0.25)] bg-[#E8F0FB] rounded-[10px] p-[20px]'>Job Open</div>
                <div className='h-[140px] w-[200px] bg-white-600 shadow-[0_4px_20px_rgba(0,0,0,0.25)] bg-[#FDEBF9] rounded-[10px] p-[20px]'>Employees</div>
            </div>
        </div>
    )
}
