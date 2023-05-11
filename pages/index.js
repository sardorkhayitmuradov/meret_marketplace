/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/button";
import TimeSwitcher from "@/components/switchers/daySwitcher/index.js";

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
    <main>
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
            <div className="max-w-xl py-14 mx-auto w-full flex items-center justify-between text-Orange-Peel">
              <div className="max-w-[470px] w-full">
                <h2 className="text-Midnight-Blue text-3lg-semibold font-NunitoSansSemiBold mb-4">
                  Discover, collect, and sell extraordinary <p>MERET NFT Market Place</p>
                </h2>
                <p className="text-Slate font-NunitoSansSemiBold text-md-semibold mb-4">MERET Place is the world's first and largest NFT marketplace</p>
                <div className="flex items-center gap-[14px] mb-8">
                  <Button className={'bg-Purple-Heart  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                    <p className="font-NunitoSansBold text-xs-bold mr-3">Masterpiece</p>
                    <Image src={ArrowRight} width={20} height={20} alt="My image" />
                  </Button>
                  <Button className={'bg-Purple-Heart  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                    <p className="font-NunitoSansBold text-xs-bold mr-3">Create</p>
                    <Image src={ArrowRight} width={20} height={20} alt="My image" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                  <Image src={Video} width={33} height={33} alt="My image" />
                  <p className="text-sm-semibold font-NunitoSansSemiBold text-Slate">Learn more about MERET NFT Market Place</p>
                </div>
              </div>
              <Image src={HeroBG} width={572} height={396} alt="My image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xl py-14 mx-auto w-full flex items-center justify-between">
              <div className="max-w-[470px] w-full">
                <h2 className="text-Midnight-Blue text-3lg-semibold font-NunitoSansSemiBold mb-4">
                  Discover, collect, and sell extraordinary <p>MERET NFT Market Place</p>
                </h2>
                <p className="text-Slate font-NunitoSansSemiBold text-md-semibold mb-4">MERET Place is the world's first and largest NFT marketplace</p>
                <div className="flex items-center gap-[14px] mb-8">
                  <Button className={'bg-Purple-Heart  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                    <p className="font-NunitoSansBold text-xs-bold mr-3">Masterpiece</p>
                    <Image src={ArrowRight} width={20} height={20} alt="My image" />
                  </Button>
                  <Button className={'bg-Purple-Heart  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                    <p className="font-NunitoSansBold text-xs-bold mr-3">Create</p>
                    <Image src={ArrowRight} width={20} height={20} alt="My image" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                  <Image src={Video} width={33} height={33} alt="My image" />
                  <p className="text-sm-semibold font-NunitoSansSemiBold text-Slate">Learn more about MERET NFT Market Place</p>
                </div>
              </div>
              <Image src={HeroBG} width={572} height={396} alt="My image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xl py-14 mx-auto w-full flex items-center justify-between">
              <div className="max-w-[470px] w-full">
                <h2 className="text-Midnight-Blue text-3lg-semibold font-NunitoSansSemiBold mb-4">
                  Discover, collect, and sell extraordinary <p>MERET NFT Market Place</p>
                </h2>
                <p className="text-Slate font-NunitoSansSemiBold text-md-semibold mb-4">MERET Place is the world's first and largest NFT marketplace</p>
                <div className="flex items-center gap-[14px] mb-8">
                  <Button className={'bg-Purple-Heart  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                    <p className="font-NunitoSansBold text-xs-bold mr-3">Masterpiece</p>
                    <Image src={ArrowRight} width={20} height={20} alt="My image" />
                  </Button>
                  <Button className={'bg-Purple-Heart  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                    <p className="font-NunitoSansBold text-xs-bold mr-3">Create</p>
                    <Image src={ArrowRight} width={20} height={20} alt="My image" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                  <Image src={Video} width={33} height={33} alt="My image" />
                  <p className="text-sm-semibold font-NunitoSansSemiBold text-Slate">Learn more about MERET NFT Market Place</p>
                </div>
              </div>
              <Image src={HeroBG} width={572} height={396} alt="My image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xl py-14 mx-auto w-full flex items-center justify-between">
              <div className="max-w-[470px] w-full">
                <h2 className="text-Midnight-Blue text-3lg-semibold font-NunitoSansSemiBold mb-4">
                  Discover, collect, and sell extraordinary <p>MERET NFT Market Place</p>
                </h2>
                <p className="text-Slate font-NunitoSansSemiBold text-md-semibold mb-4">MERET Place is the world's first and largest NFT marketplace</p>
                <div className="flex items-center gap-[14px] mb-8">
                  <Button className={'bg-Purple-Heart  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                    <p className="font-NunitoSansBold text-xs-bold mr-3">Masterpiece</p>
                    <Image src={ArrowRight} width={20} height={20} alt="My image" />
                  </Button>
                  <Button className={'bg-Purple-Heart  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                    <p className="font-NunitoSansBold text-xs-bold mr-3">Create</p>
                    <Image src={ArrowRight} width={20} height={20} alt="My image" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                  <Image src={Video} width={33} height={33} alt="My image" />
                  <p className="text-sm-semibold font-NunitoSansSemiBold text-Slate">Learn more about MERET NFT Market Place</p>
                </div>
              </div>
              <Image src={HeroBG} width={572} height={396} alt="My image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-xl py-14 mx-auto w-full flex items-center justify-between">
              <div className="max-w-[470px] w-full">
                <h2 className="text-Midnight-Blue text-3lg-semibold font-NunitoSansSemiBold mb-4">
                  Discover, collect, and sell extraordinary <p>MERET NFT Market Place</p>
                </h2>
                <p className="text-Slate font-NunitoSansSemiBold text-md-semibold mb-4">MERET Place is the world's first and largest NFT marketplace</p>
                <div className="flex items-center gap-[14px] mb-8">
                  <Button className={'bg-Purple-Heart  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                    <p className="font-NunitoSansBold text-xs-bold mr-3">Masterpiece</p>
                    <Image src={ArrowRight} width={20} height={20} alt="My image" />
                  </Button>
                  <Button className={'bg-Purple-Heart  text-white flex items-center p-4 justify-between rounded-[16px]'}>
                    <p className="font-NunitoSansBold text-xs-bold mr-3">Create</p>
                    <Image src={ArrowRight} width={20} height={20} alt="My image" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                  <Image src={Video} width={33} height={33} alt="My image" />
                  <p className="text-sm-semibold font-NunitoSansSemiBold text-Slate">Learn more about MERET NFT Market Place</p>
                </div>
              </div>
              <Image src={HeroBG} width={572} height={396} alt="My image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="pt-6 pb-7">
        <div className="max-w-xl py-8 pl-24 pr-16 mx-auto w-full flex items-center justify-between bg-Ghost-White rounded-30">
          <h3 className="text-lg-semibold font-NunitoSansSemiBold text-Midnight-Blue max-w-[270px] w-full">Discover, collect, and sell
            extraordinary
            <p>MERET NFT Market Place</p>
          </h3>
          <Button className={'bg-Purple-Heart  text-white flex items-center p-4 justify-between rounded-[16px]'}>
            <p className="font-NunitoSansBold text-xs-bold mr-3">Masterpiece</p>
            <Image src={ArrowRight} width={20} height={20} alt="My image" />
          </Button>
        </div>
      </section>
      <section className="pt-7 pb-12">
        <h2 className="text-Midnight-Blue text-center mb-4 text-xl-bold font-NunitoSansBold">Explore Collections</h2>
        <div className="max-w-xl mx-auto w-full relative">
          <button onClick={() => swiperRef.current && swiperRef.current.swiper.slidePrev()} className="custom-prev-btn border w-[53px] h-[53px] border-b-Blue-Gray p-2 rounded-[100%] flex items-center justify-center absolute z-10 -left-[2%] top-[50%] transform -translate-y-1/2 bg-white active:border-Purple-Heart duration-150">
            <Image src={Left} width={12} height={16} alt="My image" />
          </button>
          <button onClick={() => swiperRef.current && swiperRef.current.swiper.slideNext()} className="custom-next-btn border w-[53px] h-[53px] border-b-Blue-Gray p-2 rounded-[100%] flex items-center justify-center absolute z-10 -right-[2%] top-[50%] transform -translate-y-1/2 bg-white active:border-Purple-Heart duration-150">
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
          <div className="flex items-center justify-end">
            <h2 className="font-NunitoSansBold text-xl-bold relative left-[calc(100%-60%)] text-center text-Midnight-Blue">Top collections over</h2>
            <TimeSwitcher options={options} onChange={handleOptionChange} />
          </div>
        </div>
      </section>
    </main>
  );
}
