import { navLists } from '@/constants'
import { appleImg, bagImg, searchImg } from '@/utils'
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center relative z-10'>
      <nav className='flex w-full screen-max-width'>

        <Image alt="apple" height={18} width={14} src={appleImg}/>

        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((list)=>(
              <div key={list} className='px-5 cursor-pointer text-gray hover:text-white transition-all'>
                {list}
              </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <Image src={searchImg} alt="search" width={18}  height={18}/>
          <Image src={bagImg} alt="bag" width={18}  height={18}/>
        </div>

      </nav>
    </header>
  )
}
