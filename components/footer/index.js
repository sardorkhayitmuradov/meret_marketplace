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
    <footer className='border-t border-Blue-Gray py-12'>
      <div className='max-w-xxl w-full mx-auto flex flex-col gap-[65px] py-4'>
        <div className='w-full flex justify-between'>
          <div className='max-w-[35%] w-full'>
            <h3 className='font-NunitoSansBold mb-7 text-lg-bold text-Midnight-Blue'>Join the community</h3>
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

          <div className='w-[65%]'>
            <h3 className='font-NunitoSansBold text-lg-bold mb-[24px] text-Midnight-Blue'>Stay in the loop</h3>
            <div className='flex justify-between w-full'>
              <p className='font-NunitoSansRegular text-sm2-regular max-w-[400px] w-full text-Slate'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating MERET NFT MERET.</p>
              <div className='border-Blue-Gray border-[2px] rounded-[12px] max-w-[364px] w-full flex items-center py-[7px] px-[6px] justify-between'>
                <Input type={'text'} placeholder={'Enter your email address..'} nameValue={'filterProduct'} value={email} onGetValue={(e) => setEmail(e.target.value)} className={'py-3 px-2 outline-none w-full font-NunitoSansRegular mx-auto text-xxs-regular'} />
                <Button className={'rounded-[12px] max-w-[156px] w-full text-xxs-regular text-white font-NunitoSansRegular bg-Purple-Heart py-[15px] px-[34px]'}>
                  Subscibe Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <Link href={'/'}>
              <Image src={FooterLogo} className='mb-5' width={120} height={35} alt="My image" />
            </Link>
            <h4 className='text-2lg-bold mb-6z text-Midnight-Blue font-NunitoSansBold'>MERET NFT Market Place</h4>
          </div>

          <div>

          </div>
        </div>
      </div>
    </footer>
  )
}
