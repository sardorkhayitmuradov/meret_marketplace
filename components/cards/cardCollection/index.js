import { useState } from 'react'
import Image from 'next/image'
import moralVertical from '../../../public/images/more-vertical.svg'
import send from '../../../public/images/send.svg'
import saved from '../../../public/images/bookmark.svg'
import chat from '../../../public/images/chat.svg'

const CardCollection = ({
    isNew,
    item,
    author,
    date,
    defination
}) => {
    const [isLiked, setIsLiked] = useState(false);
    return (
        <li className='max-w-[282px] cursor-pointer w-full rounded-[14px] border border-slate-300 pt-[10px] pb-[14px] px-[11px]'>
            <Image className='mb-[15px]' src={item.image} width={260} height={180} alt='itemImage' />
            <h4 className='text-center text-md-semibold font-NunitoSansBold text-slate-900 mb-[7px]'>{item.name}</h4>
            <div className='flex items-center gap-3 mb-4'>
                <Image className='rounded-[18px]' src={author.image} width={48} height={48} alt='itemImage' />
                <div className='flex flex-col w-full'>
                    <div className='flex items-center gap-2 mb-[2px]'>
                        <h3 className='font-NunitoSansBold text-slate-900 text-xs-regular'>{author.name}</h3>
                        {
                            isNew && <p className='font-NunitoSansSemiBold leading-[130%] text-[11px] text-white py-[3px] px-[10px] bg-orange-500 rounded-10'>
                                New
                            </p>
                        }
                    </div>
                    <p className='font-NunitoSansSemiBold text-xxs-regular text-gray-400'>{date}</p>
                </div>
                <Image className='cursor-pointer' src={moralVertical} width={15} height={15} alt='settings' />
            </div>
            <hr className='w-full rounded-[1px] bg-slate-300 h-[2px] mb-[11px]' />
            <p className='text-center text-slate-900 font-NunitoSansRegular px-1 mb-9'>{defination}</p>
            <div className='px-[2px] flex items-center justify-between'>
                <div className='flex items-center gap-6 justify-between max-w-[110px] w-full'>
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
                    <Image className='cursor-pointer' src={chat} width={20} height={20} alt='commentIcon' />
                    <Image className='cursor-pointer' src={send} width={20} height={20} alt='sendIcon' />
                </div>
                <Image className='cursor-pointer' src={saved} width={20} height={20} alt='savedIcon' />

            </div>
        </li>
    )
}

export default CardCollection