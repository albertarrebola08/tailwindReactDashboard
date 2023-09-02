import React, {useState} from 'react'
//Icons
import { RiHome3Line,RiFileCopyLine, RiWalletLine, RiBarChartLine, RiMore2Fill,RiCloseFill } from "react-icons/ri";



const Sidebar = () => {
    const [showMenu,setShowMenu] = useState(false);
  return (
    <>
    <div 
  className={`fixed bg-primary-900 h-full lg:static w-[80%] md:w-[40] lg:w-full transition-all z-50 duration-400 ${showMenu ? 'left-0' : '-left-full'}`}
>

        {/* Profile */}
        <div className='flex flex-col justify-center items-center p-8 gap-2 h-[30vh]' >
            <img className="rounded-full h-20 w-20 object-cover ring-2 ring-gray-300" src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente_1268-21877.jpg" alt="" />
            <h1 className='text-xl text-white font-bold'>Albert Arrebola</h1>
            <p className='bg-primary-100 py-2 px-4 rounded-full text-white'>Pro level</p>
        </div>
        <div className='bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8'>
            {/* Nav vertical */}
            <nav className='flex flex-col gap-8'>
                <a href="#" className='flex items-center gap-4 text-white  px-4 py-2 rounded-xl hover:bg-primary-900/50 transition-colors'>
                    <RiHome3Line/> Dashboard
                </a>
                <a href="#" className='flex items-center gap-4 text-white  px-4 py-2 rounded-xl hover:bg-primary-900/50 transition-colors'>
                    <RiFileCopyLine/> Projects
                </a>
                <a href="#" className='flex items-center gap-4 text-white  px-4 py-2 rounded-xl hover:bg-primary-900/50 transition-colors'>
                    <RiWalletLine/> Invoices
                </a>
                <a href="#" className='flex items-center gap-4 text-white  px-4 py-2 rounded-xl hover:bg-primary-900/50 transition-colors'>
                    <RiBarChartLine/> Reports
                </a>
            </nav>

        <div className='bg-primary-900/50 text-white p-4 rounded-xl'>
            <p className='text-gray-400'>Having troubles?</p>
            <a className="font-bold" href="#">Contact us</a>
        </div>


        </div>
        

    </div>
    {/* Button mobile */}
    <button onClick={() =>setShowMenu(!showMenu)} className='z-50 lg:hidden fixed right-4 bottom-4 text-2xl text-white  bg-primary-900 p-3 rounded-full'>
        {showMenu ? <RiCloseFill/> : <RiMore2Fill/>}
    </button>
    </>
  )
}

export default Sidebar