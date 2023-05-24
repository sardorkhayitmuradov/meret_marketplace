import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { exploreCollections } from "@/constants/exploreCollections";
import { userCollections } from "@/constants/userCollections";
import { userSales } from "@/constants/userSales";
import CustomSelect from "@/components/customSelect";
import CustomAccordion from "@/components/accordion";
import { Button } from "@/components/button";
import UserCardCollection from "@/components/cards/userCardCollection";
import { Input } from "@/components/Input";
import Table from "@/components/table";
import Tablehead from "@/components/table/th";
import Tabledata from "@/components/table/td";
// import LoadingSpinner from "@/components/loadingSpinner";

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import getLastNDays from "@/functions/daysOfMonthsGenerator";
import generateData from "@/functions/dataGenerator";

import ethereum from '../../public/images/ethereum-Black.svg'
import arrowRight from '../../public/images/arrow-right.svg'
import filter from '../../public/images/adjust-vertical-alt.svg'
import avatar from '../../public/images/Avatar.svg'
import avatarUpload from '../../public/images/avatar-upload.svg'
import plusIconWhite from '../../public/images/plus-black.svg'
import arrowDownBlack from '../../public/images/Icon-selector.svg'
import doneWhite from '../../public/images/icon-left-white.svg'
import doneBlack from '../../public/images/done-violet.svg'
import downBig from '../../public/images/down-bigger.svg'
import itemsNumber from '../../public/images/documents.svg'
import search from '../../public/images/search-black.svg'
import GridLine2 from '../../public/images/grid-4.svg'
import GridLine3 from '../../public/images/grid-6.svg'
import Link from "next/link";

const options = ["All time", "Option 1", "Option 3"];

export async function getStaticPaths() {
    const data = exploreCollections;

    const paths = data.map((users) => ({
        params: { id: users.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const data = exploreCollections;

    const user = data.find((users) => users.id.toString() === params.id);

    return { props: { user } };
}


export default function UserItems({ user }) {
    const [tab, setTab] = useState(1)
    const [openMenu, setOpenMenu] = useState(true)
    const [selectedOption, setSelectedOption] = useState(null);
    // const [isLoading, setIsLoading] = useState(false)
    const [searchItems, setSearchItems] = useState("");

    const chartRef = useRef(null);
    const myChartRef = useRef(null);


    console.log(tab)

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            // If the chart instance already exists, destroy it before creating a new one
            if (myChartRef.current) {
                myChartRef.current.destroy();
                myChartRef.current = null;
            }

            const last10Days = getLastNDays(10);

            myChartRef.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: last10Days,
                    datasets: [
                        {
                            label: '1',
                            data: generateData(10),
                            borderColor: '#DB2777',
                            backgroundColor: '#DB2777',
                            fill: false,
                            tension: 0,
                            pointRadius: 0,

                        },
                        {
                            label: '2',
                            data: generateData(10),
                            borderColor: '#F97316',
                            backgroundColor: '#F97316',
                            fill: false,
                            tension: 0,
                            pointRadius: 0,
                        },
                        {
                            label: '3',
                            data: generateData(10),
                            borderColor: '#5B21B6',
                            backgroundColor: '#5B21B6',
                            fill: false,
                            tension: 0,
                            pointRadius: 0,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            grid: {
                                display: false
                            },
                            border: {
                                width: 0
                            }
                        },
                        y: {
                            grid: {
                                display: false
                            },
                            border: {
                                width: 0
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        tooltip: {
                            position: "average",
                            backgroundColor: "#0F172A",
                            titleAlign: "center",
                            bodyFont: {
                                family: "NunitoSansSemiBold",
                                size: 12,
                                lineHeight: "16px",
                                weight: 600
                            }
                        },
                        legend: {
                            position: false,
                        },
                    },
                    line: {
                        datasets: false
                    },
                    backgroundColor: 'transparent'
                },
            });
        }
    }, [tab]);

    return (
        <main className="py-[88px] relative h-full">
            <section className="py-10 relative bg-center bg-cover bg-no-repeat h-[228px] bg-[url('/images/user-items-bg.svg')]">
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-10">
                    <div className="relative">
                        <Image width={120} height={120} src={avatar} alt="avatar" />
                        <Image width={20} height={20} src={avatarUpload} className="absolute cursor-pointer -right-1 -bottom-1" alt="avatar" />
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div className="mx-auto max-w-xxl w-full flex flex-col">
                    <div className="flex items-center gap-4 w-full">
                        <CustomSelect
                            selectWrapperClassName={"max-w-[150px] ml-auto w-full relative"}
                            selectHeaderClassName={"w-full text-slate-900 p-2 text-xxs-regular font-NunitoSansBold border border-slate-300 rounded-10 outline-none bg-white cursor-pointer"}
                            selectContentWrapperClassName={"absolute top-8 w-full bg-white rounded-md overflow-hidden z-10 border rounded-br-10 rounded-bl-10"}
                            selectContentClassName={"p-2 text-xxs-regular font-NunitoSansSemiBold hover:bg-violet-800 hover:text-white cursor-pointer"}
                            options={options}
                            filterImage={plusIconWhite}
                            placeholder={'Watchlist'}
                            selectedOption={selectedOption}
                            arrowImage={arrowDownBlack}
                            setSelectedOption={setSelectedOption}
                        />
                        <CustomSelect
                            selectWrapperClassName={"max-w-[100px] w-full relative"}
                            selectHeaderClassName={"w-full text-slate-900 p-2 text-xxs-regular font-NunitoSansBold border border-slate-300 rounded-10 outline-none bg-white cursor-pointer"}
                            selectContentWrapperClassName={"absolute top-8 w-full bg-white rounded-md overflow-hidden z-10 border rounded-br-10 rounded-bl-10"}
                            selectContentClassName={"p-2 text-xxs-regular font-NunitoSansSemiBold hover:bg-violet-800 hover:text-white cursor-pointer"}
                            options={options}
                            placeholder={'SNS'}
                            selectedOption={selectedOption}
                            arrowImage={arrowDownBlack}
                            setSelectedOption={setSelectedOption}
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <h2 className="mb-3 text-3xl-bold font-NunitoSansBold text-slate-900 text-center">
                            Tommy Project Lillibridge
                        </h2>
                        <p className="mb-[30px] text-lg-medium text-center text-slate-400 font-NunitoSansSemiBold">
                            Created by
                            <span className="text-slate-900 ml-1">Tommy lee</span>
                        </p>
                        <ul className="flex items-center gap-[50px] mb-5 self-center">
                            <li className="flex items-center flex-col">
                                <p className="text-lg-bold text-slate-900 font-NunitoSansBold">
                                    10.0K
                                </p>
                                <p className="text-xxs-regular text-slate-400 font-NunitoSansSemiBold">items</p>
                            </li>
                            <li className="flex items-center flex-col">
                                <p className="text-lg-bold text-slate-900 font-NunitoSansBold">
                                    6.4K
                                </p>
                                <p className="text-xxs-regular text-slate-400 font-NunitoSansSemiBold">owners</p>
                            </li>
                            <li className="flex items-center flex-col">
                                <p className="text-lg-bold text-slate-900 font-NunitoSansBold">
                                    26
                                </p>
                                <p className="text-xxs-regular text-slate-400 font-NunitoSansSemiBold">floor price</p>
                            </li>
                            <li className="flex items-center flex-col">
                                <p className="text-lg-bold text-slate-900 font-NunitoSansBold">
                                    117.6K
                                </p>
                                <p className="text-xxs-regular text-slate-400 font-NunitoSansSemiBold">volume traded</p>
                            </li>
                        </ul>
                        <p className="text-center max-w-[715px] w-full mx-auto mb-5 text-md-semibold font-NunitoSansRegular text-slate-600">A collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits. What's more, each Moonbird unlocks private club membership and additional benefits the longer you hold them. We call it nesting – because, obviously.</p>
                        <div className="flex items-center max-w-[213px] w-full mx-auto justify-between">
                            <Button onClick={() => setTab(1)} className={`${tab === 1 ? "bg-violet-800 duration-300 border-violet-800 text-white" : "bg-transparent border-slate-300 text-slate-900"} border rounded-[12px] p-2 px-3 flex items-center gap-2`}>
                                <Image src={tab === 1 ? doneWhite : doneBlack} width={18} height={18} alt="My image" className="duration-300" />

                                <p className={`${tab === 1 ? "text-white" : "text-slate-900"} text-xs-bold duration-200 font-NunitoSansBold`}>Items</p>
                            </Button>
                            <Button onClick={() => setTab(2)} className={`${tab === 2 ? "bg-violet-800 duration-300 border-violet-800 text-white" : "bg-transparent border-slate-300 text-slate-900"} border rounded-[12px] p-2 px-3 flex items-center gap-2`}>
                                <Image src={tab === 2 ? doneWhite : doneBlack} width={18} height={18} alt="My image" className="duration-300" />

                                <p className={`${tab === 2 ? "text-white" : "text-slate-900"} text-xs-bold duration-200 font-NunitoSansBold`}>Activity</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex border-t-[2px] border-gray-200">
                <div className={`duration-300 h-full border-r border-gray-200 ${openMenu ? "w-[22.5%] max-w-[22.5%]" : "w-[70px]"}`}>
                    <div className={`flex items-center justify-between px-4 h-full py-[22px] w-full ${openMenu && "border-b border-slate-300"}`}>
                        {
                            openMenu && <div className="flex items-center gap-[10px] duration-300 w-full">
                                <Image src={filter} width={20} height={20} alt="filter" />
                                <p className="text-slate-900 text-xs-regular font-NunitoSansBold">Filter</p>
                            </div>
                        }

                        <Image onClick={() => setOpenMenu(!openMenu)} src={arrowRight} width={30} height={30} alt="filter" className={`${openMenu && "rotate-180"} duration-300 cursor-pointer`} />
                    </div>
                    <div style={{
                        transitionProperty: 'width, opacity',
                        transitionDuration: '500ms',
                        transitionTimingFunction: 'ease',
                    }} className={`${openMenu ? "flex" : "hidden"} flex-col w-full h-full`}>
                        <CustomAccordion active={false} accordionBodyClassname={'p-4 bg-slate-50 text-slate-600'} accordionClassName={'cursor-pointer'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansBold px-4 py-[22px] border-b border-slate-300'} accordionImage={downBig} title={'Status'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                        <CustomAccordion active={true} accordionBodyClassname={'p-4 bg-slate-50 text-slate-600'} accordionClassName={'cursor-pointer'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansBold px-4 py-[22px] border-b border-slate-300'} accordionImage={downBig} title={'Price'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                        <CustomAccordion active={false} accordionBodyClassname={'p-4 bg-slate-50 text-slate-600'} accordionClassName={'cursor-pointer'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansBold px-4 py-[22px] border-b border-slate-300'} accordionImage={downBig} title={'Chains'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                        <CustomAccordion active={false} accordionBodyClassname={'p-4 bg-slate-50 text-slate-600'} accordionClassName={'cursor-pointer'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansBold px-4 py-[22px] border-b border-slate-300'} accordionImage={downBig} title={'On Sale in'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                        <CustomAccordion active={false} accordionBodyClassname={'p-4 bg-slate-50 text-slate-600'} accordionClassName={'cursor-pointer'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansBold px-4 py-[22px] border-b border-slate-300'} accordionImage={downBig} title={'Background'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                        <CustomAccordion active={false} accordionBodyClassname={'p-4 bg-slate-50 text-slate-600'} accordionClassName={'cursor-pointer'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansBold px-4 py-[22px] border-b border-slate-300'} accordionImage={downBig} title={'Beak'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                        <CustomAccordion active={false} accordionBodyClassname={'p-4 bg-slate-50 text-slate-600'} accordionClassName={'cursor-pointer'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansBold px-4 py-[22px] border-b border-slate-300'} accordionImage={downBig} title={'Body'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                        <CustomAccordion active={false} accordionBodyClassname={'p-4 bg-slate-50 text-slate-600'} accordionClassName={'cursor-pointer'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansBold px-4 py-[22px] border-b border-slate-300'} accordionImage={downBig} title={'Eyes'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                        <CustomAccordion active={false} accordionBodyClassname={'p-4 bg-slate-50 text-slate-600'} accordionClassName={'cursor-pointer'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansBold px-4 py-[22px] border-b border-slate-300'} accordionImage={downBig} title={'Eyewear'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                        <CustomAccordion active={false} accordionBodyClassname={'p-4 bg-slate-50 text-slate-600'} accordionClassName={'cursor-pointer'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansBold px-4 py-[22px] border-b border-slate-300'} accordionImage={downBig} title={'Feathers'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                        <CustomAccordion active={false} accordionBodyClassname={'p-4 bg-slate-50 text-slate-600'} accordionClassName={'cursor-pointer'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansBold px-4 py-[22px] border-b border-slate-300'} accordionImage={downBig} title={'Headwear'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                        <CustomAccordion active={false} accordionBodyClassname={'p-4 bg-slate-50 text-slate-600'} accordionClassName={'cursor-pointer'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansBold px-4 py-[22px] border-b border-slate-300'} accordionImage={downBig} title={'Outerwear'}>
                            <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                Created by <br />
                                0xManekiNeko <br />
                                Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                            </p>
                        </CustomAccordion>
                    </div>
                </div>
                <div className="w-full h-full border-l border-gray-200 px-4">
                    <div className="px-6 pt-8 pb-6 flex w-full items-center justify-between gap-3 max-[1725px]:justify-center max-[1725px]:gap-y-3 max-[1725px]:flex-wrap">
                        <div className="flex items-center gap-[10px]">
                            <Image src={itemsNumber} width={25} height={25} alt="itemsNumber" />
                            <p className="text-xl-medium whitespace-nowrap font-NunitoSansSemiBold text-violet-800">4,316 items</p>
                        </div>
                        <div className='flex items-center max-w-[574px] ml-8 mr-6 w-full p-3 rounded-10 border border-slate-400'>
                            <Image src={search} width={15} height={15} alt="search" className='cursor-pointer' />
                            <Input type={'text'} placeholder={'Search'} nameValue={'filterProduct'} value={searchItems} onGetValue={(e) => setSearchItems(e.target.value)} className={'mx-2 outline-none w-full font-NunitoSansRegular text-slate-900 placeholder:text-slate-900 text-xs-regular'} />
                        </div>
                        <CustomSelect
                            selectWrapperClassName={"w-fit relative max-w-[228px] w-full"}
                            selectHeaderClassName={"w-full text-slate-900 px-4 py-3 text-xs-regular font-NunitoSansRegular border border-slate-400 rounded-10 outline-none bg-white cursor-pointer"}
                            selectContentWrapperClassName={"absolute top-9 w-full bg-white rounded-md overflow-hidden z-10 border rounded-br-10 rounded-bl-10"}
                            selectContentClassName={"px-7 py-3 text-xs-regular font-NunitoSansRegular hover:bg-violet-800 hover:text-white cursor-pointer"}
                            options={options}
                            placeholder={'Single items'}
                            selectedOption={selectedOption}
                            arrowImage={downBig}
                            setSelectedOption={setSelectedOption}
                        />
                        <CustomSelect
                            selectWrapperClassName={"w-fit relative max-w-[228px] w-full"}
                            selectHeaderClassName={"w-full text-slate-900 px-4 py-3 text-xs-regular font-NunitoSansRegular border border-slate-400 rounded-10 outline-none bg-white cursor-pointer"}
                            selectContentWrapperClassName={"absolute top-9 w-full bg-white rounded-md overflow-hidden z-10 border rounded-br-10 rounded-bl-10"}
                            selectContentClassName={"px-7 py-3 text-xs-regular font-NunitoSansRegular hover:bg-violet-800 hover:text-white cursor-pointer"}
                            options={options}
                            placeholder={'Price: Low to High'}
                            selectedOption={selectedOption}
                            arrowImage={downBig}
                            setSelectedOption={setSelectedOption}
                        />
                        <div className="flex items-center gap-3">
                            <div className="p-[10px] rounded-10 border border-slate-400">
                                <Image src={GridLine2} width={23} height={23} alt="GridLine2" className='cursor-pointer !h-[23px] !w-[23px]' />
                            </div>
                            <div className="p-[10px] rounded-10 border border-slate-400">
                                <Image src={GridLine3} width={23} height={23} alt="GridLine2" className='cursor-pointer h-[23px] w-[23px]' />
                            </div>
                        </div>
                    </div>
                    {
                        tab == 1 ? userCollections.length > 0 && <ul className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-9 ${openMenu ? "xl:grid-cols-4 gap-x-5" : "xl:grid-cols-5 gap-x-4"}`}>
                            {userCollections.length > 0
                                && userCollections.map(userProduct => {
                                    return (
                                        <Link href={"/user-assets/" + userProduct.id}>
                                            <UserCardCollection
                                            key={userProduct.id}
                                            image={userProduct.image}
                                            name={userProduct.name}
                                            isVerified={userProduct.isVerified}
                                            productId={userProduct.productId}
                                            price={userProduct.price}
                                            date={userProduct.date}
                                            liked={userProduct.liked}
                                        />
                                        </Link>
                                    )
                                })
                            }
                        </ul> :
                            <>
                                <div className="pt-[37px] pb-[53px] pl-8 pr-16 border-t w-[90%] mx-auto border-gray-200">
                                    <canvas ref={chartRef} />
                                </div>
                                <div className="py-10 w-[90%] mx-auto">
                                    <Table>
                                        <thead className='border-b border-slate-300'>
                                            <tr>
                                                <Tablehead
                                                    scope={'col'}
                                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold pl-10 text-center'}
                                                    title={'Item'}
                                                />
                                                <Tablehead
                                                    scope={'col'}
                                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                                    title={'Price'}
                                                />
                                                <Tablehead
                                                    scope={'col'}
                                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                                    title={'Quantity'}
                                                />
                                                <Tablehead
                                                    scope={'col'}
                                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                                    title={'From'}
                                                />
                                                <Tablehead
                                                    scope={'col'}
                                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                                    title={'To'}
                                                />
                                                <Tablehead
                                                    scope={'col'}
                                                    className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                                    title={'Time'}
                                                />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userSales.map((us) => {
                                                return (
                                                    <tr key={us.id}>
                                                        <Tablehead
                                                            className={'py-[15px]'}
                                                        >
                                                            <div className='flex items-center gap-6'>
                                                                <p className='text-xs-regular text-slate-900 font-NunitoSansBold'>Sale</p>
                                                                <div className='flex items-center gap-4'>
                                                                    <Image src={us.item.image} width={48} height={48} alt='eth' />
                                                                    <div className='flex flex-col items-start'>
                                                                        <p className='font-NunitoSansBold text-xs-regular text-slate-900'>{us.item.name}</p>
                                                                        <p className='text-xxs-regular text-slate-400 font-NunitoSansBold'>{us.item.author}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Tablehead>
                                                        <Tabledata className={'text-center py-[15px] font-NunitoSansBold text-lg-medium text-slate-900'} >
                                                            <div className='gap-2 flex items-center'>
                                                                <Image src={ethereum} width={13} height={18} alt='eth' />
                                                                {us.price.cryptoCurrency}
                                                            </div>
                                                            <p className="text-xxs-regular text-start text-slate-400 font-NunitoSansSemiBold">${us.price.usd}</p>
                                                        </Tabledata >
                                                        <Tabledata className={'text-center py-[15px] font-NunitoSansBold text-xs-regular text-slate-900'} text={`${us.quantity}`} />
                                                        <Tabledata className={'text-center py-[15px] font-NunitoSansBold text-xs-regular text-slate-900'} >
                                                            {us.from}
                                                        </Tabledata >
                                                        <Tabledata className={'text-center py-[15px] font-NunitoSansBold text-xs-regular text-slate-900'} text={us.to} />
                                                        <Tabledata className={'text-center py-[15px] font-NunitoSansBold text-xs-regular text-slate-900'} text={us.date} />
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </>
                    }
                </div>
            </section>
        </main>
    )
}