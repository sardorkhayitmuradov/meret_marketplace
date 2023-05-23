import Image from 'next/image'
import { useState } from 'react'
import eth from '../../../public/images/ethereum-Black.svg'

const UserCardCollection = ({
    image,
    name,
    isVerified,
    productId,
    price,
    date,
    liked
}) => {
    const [isLiked, setIsLiked] = useState(false);
    return (
        <li className='cursor-pointer w-full max-w-[256px] flex justify-center flex-col rounded-[14px] border border-slate-300 pt-[10px] pb-[14px] px-[10px]'>
            <Image className='mb-2' src={image} width={237} height={236} alt='itemImage' />

            <div className='flex flex-col px-1 mb-[9px]'>
                <div className='flex items-center justify-between'>
                    <h4 className='text-xs-regular font-NunitoSansBold text-slate-900'>{name}</h4>
                    <p className='text-xxs-regular text-slate-400 font-NunitoSansSemiBold'>Price</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-xxs-regular text-slate-400 font-NunitoSansSemiBold'>{productId}</p>
                    <div className='flex items-center mb-1 gap-[10px]'>
                        <Image src={eth} alt="eth" width={13} height={17} />
                        <p className='text-sm-regular text-slate-900 font-NunitoSansSemiBold'>{price}</p>
                    </div>
                </div>
                <p className='self-end text-xxs-regular text-slate-400 font-NunitoSansSemiBold'>{date}</p>
            </div>
            <hr className='rounded-[1px] mx-auto bg-slate-300 h-[2px] w-[90%] mb-[10px]' />
            <div className='flex items-center justify-between'>
                <p className='text-xs-regular text-violet-800 font-NunitoSansBold'>Buy now</p>
                <div className='flex items-center gap-[10px]'>
                    <svg
                        width={isLiked ? "22" : "20"}
                        height={isLiked ? "22" : "20"}
                        viewBox="0 0 20 20"
                        fill="none"
                        className='cursor-pointer duration-100'
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setIsLiked(!isLiked)}
                    >
                        <path
                            d="M5.38071 1.33334C2.40903 1.33334 0 3.74237 0 6.71406C0 8.14111 0.566893 9.50971 1.57597 10.5188L9.5286 18.4714C9.78895 18.7318 10.2111 18.7318 10.4714 18.4714L18.424 10.5188C19.4331 9.50971 20 8.14111 20 6.71406C20 3.74237 17.591 1.33334 14.6193 1.33334C13.1922 1.33334 11.8236 1.90024 10.8146 2.90932L10 3.72387L9.18545 2.90932C8.17637 1.90024 6.80777 1.33334 5.38071 1.33334Z"
                            fill={isLiked ? "#5B21B6" : "#CBD5E1"}
                        />
                    </svg>
                    <p className='text-xs-medium font-NunitoSansSemiBold text-slate-400'>{liked}</p>
                </div>
            </div>
        </li>
    )
}

export default UserCardCollection