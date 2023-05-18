/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/button";
import TimeSwitcher from "@/components/switchers/daySwitcher/index.js";

import { topCollections } from "@/constants/topCollections.js";
import { resources } from "@/constants/resources.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper';
import { collections } from '../constants/collections.js'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HeroBG from '../public/images/heroImage.svg'
import ArrowRight from '../public/images/rightSmall.svg'
import Video from '../public/images/videoStarter.svg'
import Right from '../public/images/exploreRight.svg'
import Left from '../public/images/exploreLeft.svg'
import ethereum from '../public/images/ethereum.svg'
import heroVideo from '../public/images/videoBanner.svg'
import VideoStarter from '../public/images/videoStarter.svg'
import Link from "next/link.js";

const options = [
  { value: '7', label: 'last 7 days' },
  { value: '15', label: 'last 15 days' },
  { value: '1', label: 'last a month' },
  { value: '3', label: 'last 3 months' },
  { value: '6', label: 'last 6 months' },
  { value: '1', label: 'last a year' }
];


export default function Home() {
  const swiperRef = useRef(null);

  const handleOptionChange = (option) => {
    console.log('Selected option:', option);
  };

  return (
    <main className="pt-24">
      <section className="pb-6">
        <Swiper
          pagination={{
            dynamicBullets: true,

          }}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="max-w-xl py-14 mx-auto w-full flex items-center justify-between text-orange-500">
              <div className="max-w-[470px] w-full">
                <h2 className="text-slate-900 text-3lg-semibold font-NunitoSansSemiBold mb-4">
                  Discover, collect, and sell extraordinary <p>MERET NFT Market Place</p>
                </h2>
                <p className="text-slate-600 font-NunitoSansSemiBold text-md-semibold mb-4">MERET Place is the world's first and largest NFT marketplace</p>
                <div className="flex items-center gap-[14px] mb-8">
                  <Link href={'/masterpiece'}>
                    <Button className={'bg-violet-800  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                      <p className="font-NunitoSansBold text-xs-bold mr-3">Masterpiece</p>
                      <Image src={ArrowRight} width={20} height={20} alt="My image" />
                    </Button>
                  </Link>
                  <Link href={'/create'}>
                    <Button className={'bg-violet-800  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                      <p className="font-NunitoSansBold text-xs-bold mr-3">Create</p>
                      <Image src={ArrowRight} width={20} height={20} alt="My image" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                  <Image src={Video} width={33} height={33} alt="My image" />
                  <p className="text-sm-semibold font-NunitoSansSemiBold text-slate-600">Learn more about MERET NFT Market Place</p>
                </div>
              </div>
              <Image src={HeroBG} width={572} height={396} alt="My image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xl py-14 mx-auto w-full flex items-center justify-between">
              <div className="max-w-[470px] w-full">
                <h2 className="text-slate-900 text-3lg-semibold font-NunitoSansSemiBold mb-4">
                  Discover, collect, and sell extraordinary <p>MERET NFT Market Place</p>
                </h2>
                <p className="text-slate-600 font-NunitoSansSemiBold text-md-semibold mb-4">MERET Place is the world's first and largest NFT marketplace</p>
                <div className="flex items-center gap-[14px] mb-8">
                  <Link href={'/masterpiece'}>
                    <Button className={'bg-violet-800  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                      <p className="font-NunitoSansBold text-xs-bold mr-3">Masterpiece</p>
                      <Image src={ArrowRight} width={20} height={20} alt="My image" />
                    </Button>
                  </Link>
                  <Link href={'/create'}>
                    <Button className={'bg-violet-800  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                      <p className="font-NunitoSansBold text-xs-bold mr-3">Create</p>
                      <Image src={ArrowRight} width={20} height={20} alt="My image" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                  <Image src={Video} width={33} height={33} alt="My image" />
                  <p className="text-sm-semibold font-NunitoSansSemiBold text-slate-600">Learn more about MERET NFT Market Place</p>
                </div>
              </div>
              <Image src={HeroBG} width={572} height={396} alt="My image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xl py-14 mx-auto w-full flex items-center justify-between">
              <div className="max-w-[470px] w-full">
                <h2 className="text-slate-900 text-3lg-semibold font-NunitoSansSemiBold mb-4">
                  Discover, collect, and sell extraordinary <p>MERET NFT Market Place</p>
                </h2>
                <p className="text-slate-600 font-NunitoSansSemiBold text-md-semibold mb-4">MERET Place is the world's first and largest NFT marketplace</p>
                <div className="flex items-center gap-[14px] mb-8">
                  <Link href={'/masterpiece'}>
                    <Button className={'bg-violet-800  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                      <p className="font-NunitoSansBold text-xs-bold mr-3">Masterpiece</p>
                      <Image src={ArrowRight} width={20} height={20} alt="My image" />
                    </Button>
                  </Link>
                  <Link href={'/create'}>
                    <Button className={'bg-violet-800  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                      <p className="font-NunitoSansBold text-xs-bold mr-3">Create</p>
                      <Image src={ArrowRight} width={20} height={20} alt="My image" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                  <Image src={Video} width={33} height={33} alt="My image" />
                  <p className="text-sm-semibold font-NunitoSansSemiBold text-slate-600">Learn more about MERET NFT Market Place</p>
                </div>
              </div>
              <Image src={HeroBG} width={572} height={396} alt="My image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xl py-14 mx-auto w-full flex items-center justify-between">
              <div className="max-w-[470px] w-full">
                <h2 className="text-slate-900 text-3lg-semibold font-NunitoSansSemiBold mb-4">
                  Discover, collect, and sell extraordinary <p>MERET NFT Market Place</p>
                </h2>
                <p className="text-slate-600 font-NunitoSansSemiBold text-md-semibold mb-4">MERET Place is the world's first and largest NFT marketplace</p>
                <div className="flex items-center gap-[14px] mb-8">
                  <Link href={'/masterpiece'}>
                    <Button className={'bg-violet-800  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                      <p className="font-NunitoSansBold text-xs-bold mr-3">Masterpiece</p>
                      <Image src={ArrowRight} width={20} height={20} alt="My image" />
                    </Button>
                  </Link>
                  <Link href={'/create'}>
                    <Button className={'bg-violet-800  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                      <p className="font-NunitoSansBold text-xs-bold mr-3">Create</p>
                      <Image src={ArrowRight} width={20} height={20} alt="My image" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                  <Image src={Video} width={33} height={33} alt="My image" />
                  <p className="text-sm-semibold font-NunitoSansSemiBold text-slate-600">Learn more about MERET NFT Market Place</p>
                </div>
              </div>
              <Image src={HeroBG} width={572} height={396} alt="My image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xl py-14 mx-auto w-full flex items-center justify-between">
              <div className="max-w-[470px] w-full">
                <h2 className="text-slate-900 text-3lg-semibold font-NunitoSansSemiBold mb-4">
                  Discover, collect, and sell extraordinary <p>MERET NFT Market Place</p>
                </h2>
                <p className="text-slate-600 font-NunitoSansSemiBold text-md-semibold mb-4">MERET Place is the world's first and largest NFT marketplace</p>
                <div className="flex items-center gap-[14px] mb-8">
                  <Link href={'/masterpiece'}>
                    <Button className={'bg-violet-800  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                      <p className="font-NunitoSansBold text-xs-bold mr-3">Masterpiece</p>
                      <Image src={ArrowRight} width={20} height={20} alt="My image" />
                    </Button>
                  </Link>
                  <Link href={'/create'}>
                    <Button className={'bg-violet-800  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                      <p className="font-NunitoSansBold text-xs-bold mr-3">Create</p>
                      <Image src={ArrowRight} width={20} height={20} alt="My image" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                  <Image src={Video} width={33} height={33} alt="My image" />
                  <p className="text-sm-semibold font-NunitoSansSemiBold text-slate-600">Learn more about MERET NFT Market Place</p>
                </div>
              </div>
              <Image src={HeroBG} width={572} height={396} alt="My image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="pt-6 pb-7">
        <div className="max-w-xl py-8 pl-24 pr-16 mx-auto w-full flex items-center justify-between bg-slate-50 rounded-30">
          <h3 className="text-lg-semibold font-NunitoSansSemiBold text-slate-900 max-w-[270px] w-full">Discover, collect, and sell
            extraordinary
            <p>MERET NFT Market Place</p>
          </h3>
          <Link href={'/masterpiece'}>
            <Button className={'bg-violet-800  text-white flex items-center p-4 justify-between rounded-[16px]'}>
              <p className="font-NunitoSansBold text-xs-bold mr-3">Masterpiece</p>
              <Image src={ArrowRight} width={20} height={20} alt="My image" />
            </Button>
          </Link>
        </div>
      </section>
      <section className="pt-7 pb-12">
        <h2 className="text-slate-900 text-center mb-4 text-xl-bold font-NunitoSansBold">Explore Collections</h2>
        <div className="max-w-xl mx-auto w-full relative">
          <button onClick={() => swiperRef.current && swiperRef.current.swiper.slidePrev()} className="custom-prev-btn border w-[53px] h-[53px] border-b-slate-300 p-2 rounded-[100%] flex items-center justify-center absolute z-10 -left-[2%] top-[50%] transform -translate-y-1/2 bg-white active:border-violet-800 duration-150">
            <Image src={Left} width={12} height={16} alt="My image" />
          </button>
          <button onClick={() => swiperRef.current && swiperRef.current.swiper.slideNext()} className="custom-next-btn border w-[53px] h-[53px] border-b-slate-300 p-2 rounded-[100%] flex items-center justify-center absolute z-10 -right-[2%] top-[50%] transform -translate-y-1/2 bg-white active:border-violet-800 duration-150">
            <Image src={Right} width={12} height={16} alt="My image" />
          </button>
          <Swiper
            ref={swiperRef}
            pagination={{
              dynamicBullets: true,
            }}
            slidesPerView={4}
            spaceBetween={26}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {
              collections?.slice(0, 4).concat(collections?.slice(0, 4)).map((el) => {
                return (
                  <SwiperSlide key={`${el.id}-${Math.random()}`} className="py-10">
                    <Image src={el.image} width={280} height={400} alt={el.category} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-xl mx-auto w-full">
          <div className="flex items-center justify-end mb-12">
            <h2 className="font-NunitoSansBold text-xl-bold relative -left-[30%] text-slate-900">Top collections over</h2>
            <TimeSwitcher options={options} onChange={handleOptionChange} />
          </div>
          <div className="flex items-center flex-wrap gap-6 justify-between">
            {
              topCollections.map((tc) => {
                return (
                  <Link href={'/rankings'} key={tc.id} className="flex items-center gap-6 max-w-[563px] w-full">
                    <p className="text-xs-regular font-NunitoSansBold text-slate-900">{tc.id}</p>
                    <div className="flex items-center gap-6 w-full">
                      <Image src={tc.image} width={48} height={48} alt='tc1' />
                      <div className="w-full">
                        <h4 className="text-xs-regular font-NunitoSansBold text-slate-900">{tc.name}</h4>
                        <p className="text-slate-300 font-NunitoSansSemiBold text-xs-bold">{tc.author}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <Image src={ethereum} width={13} height={17} alt='ethereum' />
                      <p className="text-xs-bold font-NunitoSansSemiBold text-slate-400">{tc.ethereum}</p>
                    </div>
                    <p className="text-xl-medium text-orange-500 font-NunitoSansBold ml-6">{tc.changes}</p>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto max-w-xl w-full">
          <h3 className="font-NunitoSansBold text-2lg-bold text-center text-slate-900 mb-[72px]">Create and sell your MERET NFT</h3>
          <ul className="flex items-center justify-between">
            <li className="max-w-[296px] w-full">
              <h5 className="text-center text-xl-medium text-slate-600 font-NunitoSansSemiBold w-full mb-6">Resources for getting started</h5>
              <p className="text-center text-md-semibold text-slate-600 font-NunitoSansRegular w-full">Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.</p>
            </li>
            <li className="max-w-[264px] w-full">
              <h5 className="text-center text-xl-medium text-slate-600 font-NunitoSansSemiBold w-full mb-6">Create your collection</h5>
              <p className="text-center text-md-semibold text-slate-600 font-NunitoSansRegular w-full">Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
            </li>
            <li className="max-w-[264px] w-full">
              <h5 className="text-center text-xl-medium text-slate-600 font-NunitoSansSemiBold w-full mb-6">Add your MERET NFT</h5>
              <p className="text-center text-md-semibold text-slate-600 font-NunitoSansRegular w-full">Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
            </li>
            <li className="max-w-[264px] w-full">
              <h5 className="text-center text-xl-medium text-slate-600 font-NunitoSansSemiBold w-full mb-6">List them for sale</h5>
              <p className="text-center text-md-semibold text-slate-600 font-NunitoSansRegular w-full">Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-10">
        <div className="mx-auto max-w-xl w-full">
          <h3 className="text-2lg-bold font-NunitoSansBold text-slate-900 text-center mb-[60px]">Resources for getting started</h3>
          <ul className="flex items-center justify-between w-full">
            {
              resources.map((r) => {
                return (
                  <li key={r.id}>
                    <Image src={r.image} width={391} height={199} alt='res img' />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-xl w-full">
          <h2 className="mb-4 text-center font-NunitoSansSemiBold text-xl-bold text-slate-900">Meet MERET NFT Market Place</h2>
          <p className="mb-9 text-center font-NunitoSansRegular text-base-regular text-slate-600">The Meet MERET NFT Market Place with everything for everyone</p>
          <div className="w-full relative cursor-pointer">
            <Image src={heroVideo} width={1200} height={693} alt='heroVideo' />
            <Image src={VideoStarter} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width={131} height={131} alt='VideoStarter' />
          </div>
        </div>
      </section>
    </main>
  );
}
