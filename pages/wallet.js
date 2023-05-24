import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/button'
import { wallets } from '@/constants/wallets'
import { Menu } from '@/components/menu'
import CustomSelect from '@/components/customSelect'
import down from '../public/images/down-bigger.svg'

const options = ["My wallet", "Option 1", "Option 3"];

export default function Wallet() {
    const [menu, setMenu] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <>
            <main className='py-32 h-screen'>
                <section>
                    <div className='mx-auto max-w-xl w-full'>
                        <div className='max-w-[473px] w-full mx-auto'>
                            <h3 className='text-2lg-bold font-NunitoSansBold text-slate-900 mb-3'>Connect your wallet.</h3>
                            <p className='text-xs-medium mb-4 font-NunitoSansSemiBold text-slate-600'>Connect with one of our available <span className='text-violet-800'>wallet</span> providers or create a new one.</p>
                            <ul className='flex flex-col gap-2 mb-5'>
                                {
                                    wallets.map((w) => {
                                        return (
                                            <li key={w.id} onClick={() => setMenu(true)} className='border duration-150 hover:bg-violet-800 group border-slate-300 py-2 pl-4 pr-5 rounded-15 flex items-center gap-2'>
                                                <div className='flex items-center gap-4 w-full'>
                                                    <Image src={w.image} width={24} height={24} alt="My image" />
                                                    <p className='font-NunitoSansBold text-slate-900 text-xs-regular w-full group-hover:text-white'>{w.name}</p>
                                                </div>
                                                <Button className={'text-xxs-regular border-violet-800 group-hover:text-violet-800 cursor-pointer font-NunitoSansBold text-white px-4 py-2 bg-violet-800 group-hover:border-slate-300 group-hover:bg-white rounded-[12px]'}>
                                                    {
                                                        w.id == 1 ? "Popular" : "Salana"
                                                    }
                                                </Button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <p className='text-center font-NunitoSansSemiBold text-base-medium cursor-pointer text-slate-600'>Show more options</p>
                        </div>
                    </div>
                </section>
            </main>
            {
                menu && <Menu isVisible={menu} onChange={(value) => setMenu(value)} >
                    <div className='w-[37%] bg-white h-full'>
                        <div className='bg-slate-50 px-[26px] pt-5 pb-5 flex items-center justify-between border border-slate-300'>
                            <CustomSelect
                                selectWrapperClassName={"w-fit relative max-w-[228px] w-full mb-[15px]"}
                                selectHeaderClassName={"w-full text-slate-900 px-6 py-2 text-xs-regular font-NunitoSansBold border border-slate-300 rounded-10 outline-none bg-white cursor-pointer"}
                                selectContentWrapperClassName={"absolute top-8 w-full bg-white rounded-md overflow-hidden z-10 border rounded-br-10 rounded-bl-10"}
                                selectContentClassName={"px-6 py-2 text-xs-regular font-NunitoSansSemiBold hover:bg-violet-800 hover:text-white cursor-pointer"}
                                options={options}
                                placeholder={'My wallet'}
                                selectedOption={selectedOption}
                                arrowImage={down}
                                setSelectedOption={setSelectedOption}
                            />
                            <p className='text-base-regular mb-4 font-NunitoSansRegular text-slate-600'>e7f1e59a-9886-401b-af</p>
                        </div>
                        <div className='flex flex-col py-14 items-center'>
                            <h3 className='text-lg-medium font-NunitoSansBold text-slate-600 mb-[14px]'>Total balance</h3>
                            <p className='text-center font-NunitoSansExtraBold text-3xl-bold cursor-pointer text-slate-900'>$0.00 USD</p>
                        </div>
                        <div className='bg-slate-50 px-[26px] pt-5 pb-5 flex items-center justify-between border border-slate-300'>
                            <Button className={'py-4 max-w-[305px] w-full bg-violet-800 rounded-[16px] mx-auto text-white text-xs-regular font-NunitoSansBold'}>
                            Add Funds
                            </Button>
                        </div>
                    </div>

                </Menu>
            }
        </>
    )
}
