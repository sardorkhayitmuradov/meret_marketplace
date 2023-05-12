import React from 'react';
import Image from 'next/image';
import { Button } from '../button';
import { wallets } from '@/constants/wallets';
import Link from 'next/link';

export const Menu = ({ isVisible, onChange }) => {
    return (
        <div
            className={`w-full h-full modal-wrapper fixed top-0 bottom-0 z-20 flex overflow-auto transition-right duration-300 ease-in-out transform right-0 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div
                onClick={() => onChange(false)}
                className='menu-content w-[63%] h-full'>
            </div>
            <div
                className='w-[37%] bg-white h-full px-[30px] py-14'>
                <h3 className='text-2lg-bold font-NunitoSansBold text-slate-900 mb-3'>My wallet</h3>
                <p className='text-lg-medium mb-4 font-NunitoSansSemiBold text-slate-600'>Connect with one of our available <span className='text-violet-800'>wallet</span> providers or create a new one.</p>
                <div className='flex flex-col gap-2 mb-5'>
                    {
                        wallets.map((w) => {
                            return (
                                <Link href={'/wallet'} onClick={() => onChange(false)} key={w.id} className='border duration-150 hover:bg-violet-800 group border-slate-300 py-2 pl-4 pr-5 rounded-15 flex items-center gap-2'>
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
        </div>
    )
}
