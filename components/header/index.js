import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from '../Input'
import Logo from '../../public/images/logo.svg'
import Search from '../../public/images/search.svg'
import Filter from '../../public/images/filter.svg'
import Bell from '../../public/images/bell.svg'
import Settings from '../../public/images/settings.svg'
import User from '../../public/images/user.svg'

export const Header = () => {
  const [search, setSearch] = useState("")
  return (
    <header>
      <div className='max-w-xxl w-full mx-auto flex items-center py-4 justify-between'>
        <Link href={'/'}>
          <Image src={Logo} width={106} height={28} alt="My image" />
        </Link>

        <div className='flex items-center py-2 px-4 max-w-[344px] w-full rounded-[18px] border border-slate-300'>
          <Image src={Search} width={15} height={15} alt="search" className='cursor-pointer' />
          <Input type={'text'} placeholder={'Search items, collections'} nameValue={'filterProduct'} value={search} onGetValue={(e) => setSearch(e.target.value)} className={'mx-2 py-3 px-2 outline-none w-full font-NunitoSansRegular'} />
          <Image src={Filter} width={15} height={15} alt="filter" className='cursor-pointer' />
        </div>
        <nav className='max-w-[492px] w-full'>
          <ul className='flex items-center justify-evenly w-full'>
            <li>
              <Link href={'/explore'} className='font-NunitoSansBold'>
                Explore
              </Link>
            </li>
            <li>
              <Link href={'/stats'} className='font-NunitoSansBold'>
                Stats
              </Link>
            </li>
            <li>
              <Link href={'/resources'} className='font-NunitoSansBold'>
                Resources
              </Link>
            </li>
            <li>
              <Link href={'/create'} className='font-NunitoSansBold'>
                Create
              </Link>
            </li>
          </ul>
        </nav>
        <div className='flex items-center justify-between max-w-[266px] w-full'>
          <div className='border border-slate-300 p-2 rounded-[12px] cursor-pointer'>
            <Image src={Bell} width={16} height={16} alt="bell" />
          </div>
          <div className='border border-slate-300 p-2 rounded-[12px] cursor-pointer'>
            <Image src={Settings} width={16} height={16} alt="settings" />
          </div>
          <div>
            <Image src={User} width={48} height={48} alt="user" className='cursor-pointer' />
          </div>
          <div className='border border-slate-300 p-4 rounded-[12px] cursor-pointer'>
            <p className='font-NunitoSansBold text-violet-800'>
              My Wallet
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
