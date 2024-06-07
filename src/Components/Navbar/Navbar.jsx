import React, { useEffect, useState } from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'

const navMenu = [
    {
        name:"Home",
        link :"/#home"
    },
    {
        name:"About",
        link :"/#about"
    },
    {
        name:"services",
        link :"/#services"
    },
    {
        name:"Projects",
        link :"/#projects"
    },
]

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")

    const toggleMenu = ( )=>{
         setShowMenu(!showMenu)
    }

    useEffect(()=>{
      if(theme === "dark"){
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
      }
      else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme" , "light");
      }
    },[theme])
  return (
    <>
       <nav className='bg-secondary dark:bg-gray-900 dark:text-white'>
        <div className='container flex justify-between items-center py-3 sm:py-0'>
            <h1 className='text-xl text-primary'>Portfolio</h1>
            {/* desktop menu */}
            <div className='hidden sm:block  '>
               <ul className='flex items-center gap-4'>
                {navMenu.map((menu)=>(
                    <li key={menu.name} >
                        <a href={menu.link} className='text-xl font-semibold px-2 py-4 md:py-6 inline-block'>{menu.name}</a>
                    </li>
                ))}
             
               {theme === "dark" ? (
                     <BiSolidSun className='text-2xl dark:text-white' onClick={()=>setTheme("light")}/>
                 ) : (
                    <BiSolidMoon className='text-2xl dark:text-white' onClick={()=>setTheme("dark")}/>
                 )}
                   </ul>
            </div>
            {/* mobile  menu */}
            <div className='block  sm:hidden'>
                <div className='flex  items-center gap-4'>
                 {theme === "dark" ? (
                     <BiSolidSun className='text-2xl dark:text-white' onClick={()=>setTheme("light")}/>
                 ) : (
                    <BiSolidMoon className='text-2xl dark:text-white' onClick={()=>setTheme("dark")}/>
                 )}
               
              <FiMenu className='text-2xl cursor-pointer dark:text-white' onClick={toggleMenu}/>
                </div>
              {showMenu && (
                <div className='fixed top-13 left-0 right-0 dark:bg-gray-900 dark:text-white bg-white shadow-md rounded-b-xl z-10 py-0 duration-200'>
                     <ul className='flex flex-col items-center gap-4'>
                        {navMenu.map((menu)=>(
                        <li key={menu.name}>
                            <a href={menu.link} className='text-xl font-semibold px-2 py-4 md:py-6 inline-block' onClick={toggleMenu}>{menu.name}</a>
                        </li>
                        ))}
                     </ul>
                     </div>
              )}
            </div>
        </div>
       </nav>
    </>
  )
}

export default Navbar