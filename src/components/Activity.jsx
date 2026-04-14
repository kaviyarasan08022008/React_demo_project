import React from 'react'

export default function Activity() {
  return (
    <div className='h-[237px] w-[378px] bg-[#132850F5]  mt-[20px] rounded-t-[12px]'>
      <h3 className='bg-[#132850F5] text-white px-[10px] py-[9px] rounded-t-[12px] text-[18px] h-[42px]'>Recent Activity</h3>
      <div className='p-[20px]'>
        <p className='text-[12px] text-[#FFFFFFBF] font-[500px]'>10.40 AM, Fri 10 Sept 2025</p>
        <h4 className='font-medium text-[19px] text-white'>You Posted a Job Update</h4>
        <p className='text-[12px] text-[#FFFFFF]'>Kindly check the requirements and terms of work and make sure everything is right.</p>
        <div className='mt-[50px] flex justify-between'>
        <h2 className='text-[#FFFFFF] font-[700px]'>Today Makes 12 tasks</h2>
        <button className='bg-[#FF9F1C] px-[15px] h-[34px] w-[132px] rounded-[6px] text-white'>View Task</button>
        </div>
      </div>
    </div>
  )
}

