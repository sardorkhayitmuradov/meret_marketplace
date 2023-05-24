import { useState } from 'react'
import Image from 'next/image';
import CustomSelect from '@/components/customSelect';
import Table from '@/components/table';
import Tablehead from '@/components/table/th';
import Tabledata from '@/components/table/td';
import Link from 'next/link';

import { rankings } from '@/constants/rankings';

import arrowDown from '../public/images/chevron-down.svg'
import addjustVertical from '../public/images/adjust-vertical-alt.svg'
import ethereum from '../public/images/ethereum.svg'

export default function Rankings() {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ["All time", "Option 1", "Option 3"];
    return (
        <main className='py-20'>
            <section className='py-16'>
                <div className='max-w-xl mx-auto w-full'>
                    <h2 className='text-center text-2lg-bold text-slate-900 font-NunitoSansBold mb-4'>TOP Collections</h2>
                    <p className='text-center mb-7 text-slate-600 font-NunitoSansRegular text-xxs-regular'>The top NFTs on MERET Market Place, ranked by volume, floor price and other statistics.</p>
                    <div className='max-w-[500px] mx-auto flex items-center justify-between'>
                        <CustomSelect
                            selectWrapperClassName={"max-w-[112px] w-full relative"}
                            selectHeaderClassName={"w-full text-violet-800 p-2 text-xxs-regular font-NunitoSansBold border border-slate-300 rounded-10 outline-none bg-white cursor-pointer"}
                            selectContentWrapperClassName={"absolute top-8 w-full bg-white rounded-md overflow-hidden z-10 border rounded-br-10 rounded-bl-10"}
                            selectContentClassName={"p-2 text-xxs-regular font-NunitoSansSemiBold hover:bg-violet-800 hover:text-white cursor-pointer"}
                            options={options}
                            filterImage={addjustVertical}
                            placeholder={'All time'}
                            selectedOption={selectedOption}
                            arrowImage={arrowDown}
                            setSelectedOption={setSelectedOption}
                        />
                        <CustomSelect
                            selectWrapperClassName={"max-w-[150px] w-full relative"}
                            selectHeaderClassName={"w-full text-violet-800 p-2 text-xxs-regular font-NunitoSansBold border border-slate-300 rounded-10 outline-none bg-white cursor-pointer"}
                            selectContentWrapperClassName={"absolute top-8 w-full bg-white rounded-md overflow-hidden z-10 border rounded-br-10 rounded-bl-10"}
                            selectContentClassName={"p-2 text-xxs-regular font-NunitoSansSemiBold hover:bg-violet-800 hover:text-white cursor-pointer"}
                            options={options}
                            filterImage={addjustVertical}
                            placeholder={'All categories'}
                            selectedOption={selectedOption}
                            arrowImage={arrowDown}
                            setSelectedOption={setSelectedOption}
                        />
                        <CustomSelect
                            selectWrapperClassName={"max-w-[125px] w-full relative"}
                            selectHeaderClassName={"w-full text-violet-800 p-2 text-xxs-regular font-NunitoSansBold border border-slate-300 rounded-10 outline-none bg-white cursor-pointer"}
                            selectContentWrapperClassName={"absolute top-8 w-full bg-white rounded-md overflow-hidden z-10 border rounded-br-10 rounded-bl-10"}
                            selectContentClassName={"p-2 text-xxs-regular font-NunitoSansSemiBold hover:bg-violet-800 hover:text-white cursor-pointer"}
                            options={options}
                            filterImage={addjustVertical}
                            placeholder={'All chains'}
                            selectedOption={selectedOption}
                            arrowImage={arrowDown}
                            setSelectedOption={setSelectedOption}
                        />
                    </div>

                    <Table className={'my-14 mr-5 ml-6'}>
                        <thead className='border-b border-slate-300'>
                            <tr>
                                <Tablehead
                                    scope={'col'}
                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold pl-10 text-start'}
                                    title={'Collection'}
                                />
                                <Tablehead
                                    scope={'col'}
                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                    title={'Volume'}
                                />
                                <Tablehead
                                    scope={'col'}
                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                    title={'24h %'}
                                />
                                <Tablehead
                                    scope={'col'}
                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                    title={'7d %'}
                                />
                                <Tablehead
                                    scope={'col'}
                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                    title={'Floor Price'}
                                />
                                <Tablehead
                                    scope={'col'}
                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                    title={'Owners'}
                                />
                                <Tablehead
                                    scope={'col'}
                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                    title={'Items'}
                                />
                            </tr>
                        </thead>
                        <tbody>
                            {rankings.map((ranking) => {
                                return (
                                    <tr key={ranking.id}>
                                        <Tablehead
                                            className={'py-[15px]'}
                                        >
                                            <Link href={"/user-items/" + ranking.id}>
                                                <div className='flex items-center gap-6'>
                                                    <p className='text-xs-regular text-slate-900 font-NunitoSansBold'>{ranking.id}</p>
                                                    <div className='flex items-center gap-4'>
                                                        <Image src={ranking.collection.image} width={48} height={48} alt='eth' />
                                                        <div className='flex flex-col items-start'>
                                                            <p className='font-NunitoSansBold text-xs-regular text-slate-900'>{ranking.collection.name}</p>
                                                            <p className='text-xxs-regular text-slate-400 font-NunitoSansBold'>{ranking.collection.author}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Tablehead>
                                        <Tabledata className={'text-center py-[15px] font-NunitoSansBold text-lg-medium text-slate-400'} >
                                            <Link href={"/user-items/" + ranking.id}>
                                                <div className='gap-[10px] flex items-center justify-center'>
                                                    <Image src={ethereum} width={13} height={18} alt='eth' />
                                                    {ranking.volume}
                                                </div>
                                            </Link>
                                        </Tabledata >
                                        <Tabledata className={'text-center py-[15px] font-NunitoSansBold text-lg-medium text-orange-500'} text={`${ranking.day}%`} />
                                        <Tabledata className={'text-center py-[15px] font-NunitoSansBold text-lg-medium text-[#84CC16]'} text={`${ranking.week}%`} />
                                        <Tabledata className={'text-center py-[15px] font-NunitoSansBold text-lg-medium text-slate-400'} >
                                            <div className='gap-[10px] flex items-center justify-center'>
                                                <Image src={ethereum} width={13} height={18} alt='eth' />
                                                {ranking.floorPrice}
                                            </div>
                                        </Tabledata >
                                        <Tabledata className={'text-center py-[15px] font-NunitoSansBold text-lg-medium text-slate-900'} text={ranking.owners} />
                                        <Tabledata className={'text-center py-[15px] font-NunitoSansBold text-lg-medium text-slate-900'} text={ranking.items} />
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </section>
        </main>
    )
}
