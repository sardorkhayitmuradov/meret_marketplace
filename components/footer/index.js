import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from '../Input'
import { Button } from '../button'
import Instagram from '../../public/images/Instagram.svg'
import Facebook from '../../public/images/Facebook.svg'
import Twitter from '../../public/images/Twiiter.svg'
import Line from '../../public/images/LINE.svg'
import YouTube from '../../public/images/YouTube.svg'
import Github from '../../public/images/Github.svg'
import FooterLogo from '../../public/images/footerLogo.svg'

export const Footer = () => {
  const [email, setEmail] = useState("")

  return (
    <footer className='border-t border-slate-300 py-12'>
      <div className='max-w-xxl w-full mx-auto flex flex-col gap-[65px] py-4'>
        <div className='w-full flex justify-between'>
          <div className='max-w-[35%] w-full'>
            <h3 className='font-NunitoSansBold mb-7 text-lg-bold text-slate-900'>Join the community</h3>
            <ul className='flex items-center max-w-[295px] w-full justify-between'>
              <li>
                <Link href={'/'}>
                  <Image src={Instagram} width={32} height={32} alt="Instagram" />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <Image src={Facebook} width={32} height={32} alt="Instagram" />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <Image src={Twitter} width={32} height={32} alt="Instagram" />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <Image src={Line} width={32} height={32} alt="Instagram" />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <Image src={YouTube} width={32} height={32} alt="Instagram" />
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <Image src={Github} width={30} height={30} alt="Instagram" />
                </Link>
              </li>
            </ul>
          </div>

          <div className='max-w-[65%] w-full'>
            <h3 className='font-NunitoSansBold text-lg-bold mb-[24px] text-slate-900'>Stay in the loop</h3>
            <div className='flex justify-between w-full'>
              <p className='font-NunitoSansRegular text-sm-regular max-w-[400px] w-full text-slate-600'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating MERET NFT MERET.</p>
              <div className='border-slate-300 border-[2px] rounded-[12px] max-w-[364px] w-full flex items-center py-[7px] px-[6px] justify-between'>
                <Input type={'text'} placeholder={'Enter your email address..'} nameValue={'filterProduct'} value={email} onGetValue={(e) => setEmail(e.target.value)} className={'py-3 px-2 outline-none w-full font-NunitoSansRegular mx-auto text-xxs-regular'} />
                <Button className={'rounded-[12px] max-w-[156px] w-full text-xxs-regular text-white font-NunitoSansRegular bg-violet-800 py-[15px] px-[34px]'}>
                  Subscibe Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-between'>
          <div className='max-w-[35%] w-full'>
            <Link href={'/'} className='mb-5'>
              <Image src={FooterLogo} className='mb-5' width={120} height={35} alt="My image" />
            </Link>
            <h4 className='text-2lg-bold mb-6 text-slate-900 font-NunitoSansBold'>MERET NFT Market Place</h4>
            <p className='font-NunitoSansRegular mb-2 max-w-[370px] w-full inline-block text-sm-regular text-slate-600'>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFT). Buy, sell, and discover exclusive digital items.</p>
            <span className='font-NunitoSansRegular max-w-[370px] w-full inline-block text-sm-regular text-slate-400'>Copyright © 2022 NFT MERET NFT Market Place</span>
          </div>

          <div className='max-w-[65%] w-full flex items-start justify-between'>
            <ul>
              <li className='mb-6'>
                <Link href={'/'} className='font-NunitoSansBold text-lg-bold text-slate-900'>
                  Market Place
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  All NFTs
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  New
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Art
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Sports
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Utility
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Music
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Domain Name
                </Link>
              </li>
            </ul>
            <ul>
              <li className='mb-6'>
                <Link href={'/'} className='font-NunitoSansBold text-lg-bold text-slate-900'>
                  My Account
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Profile
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Favorites
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Watchlist
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  My CollectionsStats
                </Link>
              </li>
              <li className='mb-5'>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Settings
                </Link>
              </li>
              <li>
                <ul>
                  <li className='mb-6'>
                    <Link href={'/'} className='font-NunitoSansBold text-lg-bold text-slate-900'>
                      Stats
                    </Link>
                  </li>
                  <li>
                    <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                      Rankings
                    </Link>
                  </li>
                  <li>
                    <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                      Activity
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li className='mb-6'>
                <Link href={'/'} className='font-NunitoSansBold text-lg-bold text-slate-900'>
                  Resources
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Platform
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Status
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Partners
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Gas-Free Marketplace
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Taxes
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Docs
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Newsletter
                </Link>
              </li>
            </ul>
            <ul>
              <li className='mb-6'>
                <Link href={'/'} className='font-NunitoSansBold text-lg-bold text-slate-900'>
                  About
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Ventures
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Grants
                </Link>
              </li>
              <li>
                <Link href={'/'} className='font-NunitoSansSemiBold text-slate-600 text-sm-semibold'>
                  Company
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
