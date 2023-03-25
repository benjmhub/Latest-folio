import React, { useState } from 'react'
import NavLinks from './NavLinks'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const MobileNavigation = () => {

  const [isOpen , setisOpen] = useState(false)

  const HamburgerMenu = <GiHamburgerMenu 
                        color='black' 
                        size='40px' 
                        className='absolute right-[3%] cursor-pointer p-3 h-[50px] w-[50px]' 
                        onClick={()=>setisOpen(!isOpen)}/>

  const CloseIcon = <AiOutlineClose 
                    color='black' 
                    size='40px' 
                    className='absolute right-[3%] cursor-pointer z-20 p-3 h-[50px] w-[50px]' 
                    onClick={()=>setisOpen(!isOpen)}/>

  return (
    <>
      <nav className='md:hidden bg-blue-300 flex items-center'>
        {isOpen ? CloseIcon : HamburgerMenu}
        {isOpen && <NavLinks/>}
      </nav>
    </>
  )
}

export default MobileNavigation
