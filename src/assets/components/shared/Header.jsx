import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
const Header = () => {
  return (
    <div className="flex items-center justify-between flex-col md:flex-row gap-4 ">
        <h1 className='text-3xl md:3xl font-bold '>🌞Good morning, <span className='text-primary-100'>Albert</span></h1>
        <form action="" className='md:w-auto w-full'>
            <div className='relative'>
                <RiSearch2Line className='absolute top-1/2 -translate-y-1/2 left-2'/>
                <input className="bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-xl w-full md:w-auto" placeholder="Search for projects" type="text" />
            </div>
            
        </form>
    </div>
  )
}

export default Header