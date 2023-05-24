import { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import Tab from '@/components/tab'
import { Button } from '@/components/button'
import { categories } from '@/constants/categories'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import dialog from '../public/images/dialog.svg'
import { exploreCollections } from '@/constants/exploreCollections'
import Link from 'next/link'

const CardCollectionComponent = dynamic(() => import('@/components/cards/cardCollection'));

export default function Explore() {
    const [selectedTab, setSelectedTab] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
        <main className="pt-20 pb-80">
            <section className="py-16">
                <div className="mx-auto w-full max-w-xl">
                    <h2 className="mb-8 text-center text-xl-bold font-NunitoSansBold text-slate-900">Explore Collections</h2>
                    <div className="scrollbar relative mb-14 flex h-[38px] w-full items-center gap-2">
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex w-full max-w-[148px] cursor-pointer items-center gap-2 rounded-[12px] bg-violet-800 px-4 py-[11px] font-NunitoSansBold text-xs-medium text-white"
                        >
                            <Image
                                src={dialog}
                                className={`duration-200 ${isOpen && 'rotate-180'}`}
                                width={24}
                                height={24}
                                alt="My image"
                            />
                            <p className="block w-full">All Categories</p>
                        </div>
                        <div className="scrollbar absolute left-[160px] flex h-full w-full gap-2 overflow-x-scroll scroll-smooth">
                            <TransitionGroup className="scrollbar absolute flex h-full w-full gap-2 overflow-x-scroll scroll-smooth">
                                {isOpen &&
                                    categories.map((tab, index) => (
                                        <CSSTransition key={index} timeout={500} classNames="item">
                                            <Tab
                                                onClick={() => setSelectedTab(tab)}
                                                className={`flex h-full cursor-pointer items-center justify-center whitespace-nowrap rounded-[12px] px-4 font-NunitoSansBold text-xs-medium duration-500 ${selectedTab === tab
                                                    ? 'bg-violet-800 text-white'
                                                    : 'bg-slate-50 text-slate-900'
                                                    }`}
                                            >
                                                {tab}
                                            </Tab>
                                        </CSSTransition>
                                    ))}
                            </TransitionGroup>
                        </div>
                    </div>

                    <ul className='grid grid-cols-1 mb-[53px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-[110px]'>
                        {exploreCollections.length > 0
                            ? exploreCollections.map(ec => {
                                return (
                                    <Link href={`/user-items/` + ec.id}>
                                        <CardCollectionComponent
                                            key={ec.id}
                                            isNew={ec.isNew}
                                            item={ec.item}
                                            author={ec.author}
                                            date={ec.date}
                                            defination={ec.definition}
                                        />
                                    </Link>
                                )
                            })
                            : ''}
                    </ul>

                    <Button
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className='rounded-[16px] mx-auto hover:bg-violet-800 group duration-300 border border-violet-800 flex items-center gap-[14px] p-[14px]'>
                        <p className='text-xs-regular font-NunitoSansBold text-violet-800 group-hover:text-white duration-100'>More Explore</p>
                        <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            className='duration-200'
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.4798 12.3132L11.1263 12.6667L11.8334 13.3738L12.1869 13.0203L11.4798 12.3132ZM14.5 10L14.8536 10.3536L15.2071 10L14.8536 9.64649L14.5 10ZM12.1869 6.97982L11.8334 6.62627L11.1263 7.33337L11.4798 7.68693L12.1869 6.97982ZM12.1869 13.0203L14.8536 10.3536L14.1465 9.64649L11.4798 12.3132L12.1869 13.0203ZM14.8536 9.64649L12.1869 6.97982L11.4798 7.68693L14.1465 10.3536L14.8536 9.64649ZM14.5 9.50004H5.83337V10.5H14.5V9.50004Z"
                                fill={hovered ? "#FFFFFF" : "#0F172A"}
                            />
                        </svg>
                    </Button>
                </div>
            </section>
        </main>
    )
}
