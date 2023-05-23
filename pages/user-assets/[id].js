import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables); // Register all controllers, elements, scales, and plugins.
import getLastNDays from "@/functions/daysOfMonthsGenerator";
import generateData from "@/functions/dataGenerator";

import { exploreCollections } from "@/constants/exploreCollections";
import { offers } from "@/constants/offers";
import { Button } from "@/components/button";
import { activity } from "@/constants/activity";
import CustomAccordion from "@/components/accordion";
import CustomSelect from "@/components/customSelect";
import Table from "@/components/table";
import Tabledata from "@/components/table/td";
import Tablehead from "@/components/table/th";
import eth from '../../public/images/ethereum-Black.svg';
import heart from '../../public/images/heart.svg';
import UserAsset from '../../public/images/item-asset.svg';
import arrowDownUp from '../../public/images/chevron-down.svg';
import aboutArt from '../../public/images/aboutArt.svg';
import Eye from '../../public/images/eye.svg';
import Heart from '../../public/images/heartBlack.svg';
import copy from '../../public/images/copy.svg'
import done from '../../public/images/done.svg'
import down from '../../public/images/down-bigger.svg'
import cancel from '../../public/images/cancel.svg'
import { userCollections } from "@/constants/userCollections";
import UserCardCollection from "@/components/cards/userCardCollection";

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

export default function UserAssets() {
    const chartRef = useRef(null);
    const myChartRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {

        const rand = function (min, max) {
            return Math.random() * (max - min) + min;
        }
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
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: false
                            },
                        }],
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
    }, []);

    return (
        <main className="py-32">
            <section className="py-10">
                <div className="max-w-xl mx-auto w-full">
                    <div className="flex gap-7">
                        <div className="flex flex-col max-w-[508px] w-full">
                            <div className="rounded-10 border border-slate-300 mb-6">
                                <div className="pt-[10px] pb-[11px] pl-[18px] pr-[13px] rounded-tl-10 rounded-tr-10 flex items-center justify-between">
                                    <Image src={eth} alt="eth" width={13} height={17} />
                                    <div className="flex items-center gap-[9px]">
                                        <Image src={heart} alt="heart" width={20} height={20} />
                                        <p className="text-slte-600 text-xs-bold font-NunitoSansSemiBold">30</p>
                                    </div>
                                </div>
                                <Image src={UserAsset} alt="UserAsset" width={508} height={508} />
                            </div>
                            <CustomAccordion active={true} accordionBodyClassname={'p-4 border-t bg-slate-50 text-slate-600'} accordionClassName={'border rounded-10 cursor-pointer border-slate-300 mb-[10px]'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansSemiBold p-4 rounded-10'} accordionImage={arrowDownUp} title={'Description'}>
                                <p className="text-slate-600 text-base-medium font-NunitoSansSemiBold">
                                    Created by <br />
                                    0xManekiNeko <br />
                                    Cherry blossoms signal the arrival of Spring in many parts of the world, transforming parks, neighborhoods and countrysides into fairytale scenes of gentle pink and white flowers that appear as clouds from a distance. The brief presence of these splendid blooms is much celebrated in Japan as an annual event referred to as “Hanami” with picnics, family gatherings, and prolific picture taking among the ephemeral flowers.
                                </p>
                            </CustomAccordion>
                            <CustomAccordion active={true} accordionBodyClassname={'p-5 border-t flex items-center justify-between bg-slate-50 text-slate-600'} accordionClassName={'border rounded-10 border-slate-300 mb-6'} accordionHeaderClassName={'text-slate-900 cursor-pointer text-xs-regular font-NunitoSansSemiBold p-4 rounded-10'} accordionImage={arrowDownUp} title={'Properties'}>
                                <div className="max-w-[151px] w-full border border-slate-300 rounded-10 py-3 text-center">
                                    <p className="text-violet-800 text-xs-medium font-NunitoSansRegular mb-2">ARTIST</p>
                                    <h4 className="text-xs-regular font-NunitoSansSemiBold text-slate-900 mb-2">Maneki Neko</h4>
                                    <p className="text-xs-medium text-slate-600 font-NunitoSansSemiBold">New trait</p>
                                </div>
                                <div className="max-w-[151px] w-full border border-slate-300 rounded-10 py-3 text-center">
                                    <p className="text-violet-800 text-xs-medium font-NunitoSansRegular mb-2">ARTIST</p>
                                    <h4 className="text-xs-regular font-NunitoSansSemiBold text-slate-900 mb-2">Maneki Neko</h4>
                                    <p className="text-xs-medium text-slate-600 font-NunitoSansSemiBold">New trait</p>
                                </div>
                                <div className="max-w-[151px] w-full border border-slate-300 rounded-10 py-3 text-center">
                                    <p className="text-violet-800 text-xs-medium font-NunitoSansRegular mb-2">ARTIST</p>
                                    <h4 className="text-xs-regular font-NunitoSansSemiBold text-slate-900 mb-2">Maneki Neko</h4>
                                    <p className="text-xs-medium text-slate-600 font-NunitoSansSemiBold">New trait</p>
                                </div>
                            </CustomAccordion>
                            <CustomAccordion active={true} accordionBodyClassname={'p-4 border-t bg-slate-50 text-slate-600'} accordionClassName={'border rounded-10 border-slate-300 mb-6'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansSemiBold p-4 rounded-10 cursor-pointer'} accordionImage={arrowDownUp} title={'About Maneki Neko Art'}>
                                <div className="flex gap-[22px]">
                                    <Image src={aboutArt} alt="eth" width={120} height={120} className="h-[120px]" />

                                    <p className="text-slate-600 max-w-[315px] w-full text-base-medium font-NunitoSansSemiBold">
                                        These are 1/1 pieces created by Maneki Neko, minted via the Manifold ERC-721 contract. Check the Collection property on each item to see which series they are a part of, may cross over to her editions collection.
                                    </p>
                                </div>
                            </CustomAccordion>
                        </div>

                        <div className="max-w-[661px] w-full">
                            <p className="text-sm-regular font-NunitoSansBold text-violet-800 mb-[17px]">Maneki Neko Art</p>
                            <h3 className="text-2lg-bold text-slte-900 font-NunitoSansBold mb-10">Tommy Project Lillibridge</h3>
                            <div className="flex items-center gap-6 mb-7">
                                <p className="text-lg-medium font-NunitoSansSemiBold text-slate-600">Created by <span className="text-violet-800">Tommy lee</span></p>
                                <div className="flex items-center gap-[10px]">
                                    <Image src={Eye} alt="eth" width={24} height={24} />
                                    <p className="text-xs-bold font-NunitoSansSemiBold text-slate-600">2.2 views</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <Image src={Heart} alt="eth" width={20} height={20} />
                                    <p className="text-xs-bold font-NunitoSansSemiBold text-slate-600">30 favarites</p>
                                </div>
                            </div>
                            <div className="p-4 border border-slate-300 rounded-10 bg-slate-50 mb-6">
                                <p className="text-lg-medium font-NunitoSansSemiBold text-slate-600 mb-3">Created by <span className="text-violet-800">Tommy lee</span></p>
                                <div className="flex items-center gap-3 mb-4">
                                    <Image src={eth} alt="eth" width={13} height={17} />
                                    <p className="text-lg-semibold text-slate-600 font-NunitoSansBold">24,328.16</p>
                                    <p className="font-NunitoSansSemiBold text-xs-medium text-slate-400">$2,898.34</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <Button className={'rounded-[12px] bg-violet-800 py-[13px] px-[70px] gap-2 flex items-center text-white'}>
                                        <Image src={copy} alt="eth" width={16} height={16} />
                                        <p className="text-xxs-regular font-NunitoSansBold align-middle">Buy now</p>
                                    </Button>
                                    <Button className={'rounded-[12px] border border-violet-800 py-[13px] px-[70px] gap-2 flex items-center text-violet-800'}>
                                        <Image src={done} alt="eth" width={16} height={16} />
                                        <p className="text-xxs-regular font-NunitoSansBold align-middle">Make offer</p>
                                    </Button>
                                </div>
                            </div>
                            <CustomAccordion active={true} accordionBodyClassname={'px-4 py-5 border-t bg-slate-50 text-slate-600'} accordionClassName={'border rounded-10 cursor-pointer border-slate-300 mb-5'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansSemiBold p-4 rounded-10'} accordionImage={arrowDownUp} title={'Price History'}>
                                <div className="flex items-center mb-7 gap-[10px]">
                                    <CustomSelect
                                        selectWrapperClassName={"w-fit relative max-w-[228px] w-full"}
                                        selectHeaderClassName={"w-full text-slate-900 px-8 py-4 text-xs-regular font-NunitoSansBold border border-slate-300 rounded-10 outline-none bg-white cursor-pointer"}
                                        selectContentWrapperClassName={"absolute top-11 w-full bg-white rounded-md overflow-hidden z-10 border rounded-br-10 rounded-bl-10"}
                                        selectContentClassName={"px-7 py-3 text-xs-regular font-NunitoSansSemiBold hover:bg-violet-800 hover:text-white cursor-pointer"}
                                        options={options}
                                        placeholder={'All time'}
                                        selectedOption={selectedOption}
                                        arrowImage={down}
                                        setSelectedOption={setSelectedOption}
                                    />
                                    <div className="flex flex-col gap-2">
                                        <p className="text-slate-600 font-NunitoSansRegular text-xs-regular">90 Day Avg. Price</p>
                                        <p className="text-violet-800 font-NunitoSansBold text-xs-regular"><span>Ξ </span> 1.4465</p>
                                    </div>
                                </div>
                                <div>
                                    <canvas ref={chartRef} />
                                </div>
                            </CustomAccordion>

                            <CustomAccordion active={false} accordionBodyClassname={'px-4 py-5 border-t bg-slate-50 text-slate-600'} accordionClassName={'border rounded-10 cursor-pointer border-slate-300 mb-[10px]'} accordionHeaderClassName={'text-slate-900 text-xs-regular font-NunitoSansSemiBold p-4 rounded-10'} accordionImage={arrowDownUp} title={'Listings'}>

                            </CustomAccordion>

                            <CustomAccordion active={true} accordionBodyClassname={'pb-5 border-t bg-slate-50 text-slate-600'} accordionClassName={'border rounded-10 cursor-pointer border-slate-300 mb-[10px]'} accordionHeaderClassName={'text-slate-900  text-xs-regular font-NunitoSansSemiBold p-4 rounded-10'} accordionImage={arrowDownUp} title={'offers'}>
                                <Table className={''}>
                                    <thead className='border-b border-slate-300'>
                                        <tr>
                                            <Tablehead
                                                scope={'col'}
                                                className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                                title={'Price'}
                                            />
                                            <Tablehead
                                                scope={'col'}
                                                className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                                title={'USD Price'}
                                            />
                                            <Tablehead
                                                scope={'col'}
                                                className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                                title={'Floor Difference'}
                                            />
                                            <Tablehead
                                                scope={'col'}
                                                className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                                title={'Expiration'}
                                            />
                                            <Tablehead
                                                scope={'col'}
                                                className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                                title={'From'}
                                            />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {offers.map((offer) => {
                                            return (
                                                <tr key={offer.id} className="border-b border-t border-slate-300">
                                                    <Tablehead
                                                        className={'py-4 pl-4'}
                                                    >
                                                        <div className='flex items-center gap-2'>
                                                            <Image src={eth} width={13} height={18} alt='eth' />
                                                            <p className='font-NunitoSansBold text-base-regular text-slate-400'>{offer.price}</p>
                                                        </div>
                                                    </Tablehead>
                                                    <Tabledata className={'text-center py-4 font-NunitoSansBold text-sm-regular text-slate-400'} >
                                                        <div className='gap-[10px] flex items-center justify-center'>
                                                            {offer.usdPrice}
                                                        </div>
                                                    </Tabledata >
                                                    <Tabledata className={'text-center py-4 font-NunitoSansBold text-sm-regular text-slate-400'} text={`${offer.floorDifference}%`} />
                                                    <Tabledata className={'text-center py-4 font-NunitoSansBold text-sm-regular text-[#84CC16]'} text={`${offer.expiration}%`} />
                                                    <Tabledata className={'text-center pr-4 py-4 font-NunitoSansBold text-sm-regular text-violet-800'} >
                                                        <div className='gap-[10px] flex items-center justify-center'>
                                                            {offer.from}
                                                        </div>
                                                    </Tabledata >
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </CustomAccordion>
                        </div>
                    </div>

                    <CustomAccordion active={true} accordionBodyClassname={'py-5 px-4 border-t bg-slate-50 text-slate-600'} accordionClassName={'border rounded-10 cursor-pointer border-slate-300 mb-5'} accordionHeaderClassName={'text-slate-900  text-xs-regular font-NunitoSansSemiBold p-4 rounded-10'} accordionImage={arrowDownUp} title={'Item Activity'}>
                        <CustomSelect
                            selectWrapperClassName={"w-fit relative max-w-[228px] w-full mb-[15px]"}
                            selectHeaderClassName={"w-full text-slate-900 px-8 py-4 text-xs-regular font-NunitoSansBold border border-slate-300 rounded-10 outline-none bg-white cursor-pointer"}
                            selectContentWrapperClassName={"absolute top-11 w-full bg-white rounded-md overflow-hidden z-10 border rounded-br-10 rounded-bl-10"}
                            selectContentClassName={"px-7 py-3 text-xs-regular font-NunitoSansSemiBold hover:bg-violet-800 hover:text-white cursor-pointer"}
                            options={options}
                            placeholder={'Filter'}
                            selectedOption={selectedOption}
                            arrowImage={down}
                            setSelectedOption={setSelectedOption}
                        />

                        <div className="flex items-center gap-3 mb-7">
                            <div className="border border-slate-300 rounded-[12px] py-2 pl-4 pr-3 flex items-center gap-[10px]">
                                <p className="text-xxs-regular font-NunitoSansBold text-slate-900">Sales</p>
                                <Image src={cancel} width={10} height={10} alt="cancel" />
                            </div>
                            <div className="border border-slate-300 rounded-[12px] py-2 pl-4 pr-3 flex items-center gap-[10px]">
                                <p className="text-xxs-regular font-NunitoSansBold text-slate-900">Transfers</p>
                                <Image src={cancel} width={10} height={10} alt="cancel" />
                            </div>
                            <p className="text-xs-medium font-NunitoSansBold text-violet-800 mx-2">ClearAll</p>

                        </div>

                        <Table className={''}>
                            <thead className='border-b border-slate-300'>
                                <tr>
                                    <Tablehead
                                        scope={'col'}
                                        className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                        title={'Event'}
                                    />
                                    <Tablehead
                                        scope={'col'}
                                        className={'text-md-semibold py-3 text-slate-900 font-NunitoSansSemiBold'}
                                        title={'Price'}
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
                                        title={'Date'}
                                    />
                                </tr>
                            </thead>
                            <tbody>
                                {activity.map((act) => {
                                    return (
                                        <tr key={act.id} className="border-b border-t border-slate-300">
                                            <Tablehead
                                                className={'py-4 pl-4'}
                                            >
                                                <p className='font-NunitoSansSemiBold text-base-medium text-slate-900'>{act.event}</p>
                                            </Tablehead>
                                            <Tabledata className={'text-center py-4 font-NunitoSansBold text-sm-regular text-slate-400'} >
                                                <div className='gap-[10px] flex items-center justify-center'>
                                                    <Image src={eth} width={13} height={18} alt='eth' />
                                                    <p className="text-slate-600 text-lg-medium font-NunitoSansBold">{act.price}</p>
                                                </div>
                                            </Tabledata >
                                            <Tabledata className={'text-center py-4 font-NunitoSansBold text-sm-regular text-slate-400'} text={`${act.from}`} />
                                            <Tabledata className={'text-center py-4 font-NunitoSansBold text-sm-regular text-slate-400'} text={`${act.to}`} />
                                            <Tabledata className={'text-center pr-4 py-4 font-NunitoSansBold text-sm-regular text-violet-800'} >
                                                <div className='gap-[10px] flex items-center justify-center'>
                                                    {act.date} ago
                                                </div>
                                            </Tabledata >
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </CustomAccordion>

                    <CustomAccordion active={true} accordionBodyClassname={'py-5 px-[30px] border-t bg-slate-50 text-slate-600'} accordionClassName={'border rounded-10 cursor-pointer border-slate-300 mb-[10px]'} accordionHeaderClassName={'text-slate-900  text-xs-regular font-NunitoSansSemiBold p-4 rounded-10'} accordionImage={arrowDownUp} title={'More From This Collection'}>
                    <ul className='grid grid-cols-1 mb-[53px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-9'>
                        {userCollections.length > 0
                            && userCollections.map(userProduct => {
                                return (
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
                                )
                            })
                            }
                    </ul>
                    </CustomAccordion>
                </div>
            </section>
        </main>
    )
}