import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from '../Input'
import { Menu } from '../menu'
import { Button } from '../button'

import { wallets } from '@/constants/wallets'

import Logo from '../../public/images/logo.svg'
import Search from '../../public/images/search.svg'
import Filter from '../../public/images/filter.svg'
import Bell from '../../public/images/bell.svg'
import Settings from '../../public/images/settings.svg'
import User from '../../public/images/user.svg'

export const Header = () => {
  const [search, setSearch] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const isHeaderWhite = scrollPosition > 100;

  return (
    <>
      <header className={`fixed w-full duration-300 bg-white z-[11] ${isHeaderWhite ? "py-3" : "py-4"}`}>
        <div className='max-w-xxl w-full mx-auto flex items-center justify-between'>
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
                <Link href={'/masterpiece'} className='font-NunitoSansBold'>
                  Masterpiece
                </Link>
              </li>
              <li>
                <Link href={'/explore'} className='font-NunitoSansBold'>
                  Explore
                </Link>
              </li>
              <li>
                <Link href={'/rankings'} className='font-NunitoSansBold'>
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
            <div onClick={() => setMenu(true)} className='border border-slate-300 p-4 rounded-[12px] cursor-pointer'>
              <p className='font-NunitoSansBold text-violet-800'>
                My Wallet
              </p>
            </div>
          </div>
        </div>
      </header>
      {
        menu && <Menu isVisible={menu} onChange={(value) => setMenu(value)} >
          <div
            className='w-[37%] bg-white h-full px-[30px] py-14'>
            <h3 className='text-2lg-bold font-NunitoSansBold text-slate-900 mb-3'>My wallet</h3>
            <p className='text-lg-medium mb-4 font-NunitoSansSemiBold text-slate-600'>Connect with one of our available <span className='text-violet-800'>wallet</span> providers or create a new one.</p>
            <div className='flex flex-col gap-2 mb-5'>
              {
                wallets.map((w) => {
                  return (
                    <Link href={'/wallet'} onClick={() => setMenu(false)} key={w.id} className='border duration-150 hover:bg-violet-800 group border-slate-300 py-2 pl-4 pr-5 rounded-15 flex items-center gap-2'>
                      <div className='flex items-center gap-4 w-full'>
                        <Image src={w.image} width={24} height={24} alt="My image" />
                        <p className='font-NunitoSansBold text-slate-900 text-xs-regular w-full group-hover:text-white'>{w.name}</p>
                      </div>
                      <Button className={'text-xxs-regular border-violet-800 group-hover:text-violet-800 cursor-pointer font-NunitoSansBold text-white px-4 py-2 bg-violet-800 group-hover:border-slate-300 group-hover:bg-white rounded-[12px]'}>
                        {
                          w.id == 1 ? "Popular" : "Salana"
                        }
                      </Button>
                    </Link>
                  )
                })
              }
            </div>
            <p className='text-center font-NunitoSansSemiBold text-lg-medium cursor-pointer text-slate-600'>Show more options</p>
          </div>
        </Menu>
      }
    </>
  )
}
