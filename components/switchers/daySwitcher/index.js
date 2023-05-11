import React, { useState } from 'react';
import Image from 'next/image';
import switchIcon from '../../../public/images/down.svg';

export default function TimeSwitcher({className, options, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option);
    };

    return (
        <div className='relative cursor-pointer w-fit right-0 font-NunitoSansBold text-base-medium text-tonal-600' onClick={toggleDropdown} >
            <div className='flex p-2 text-violet-800'>
                {selectedOption.label}
                {
                    isOpen ? <Image src={switchIcon} alt='switch moder' className='ml-3 rotate-180 duration-300' /> : <Image src={switchIcon} width={15} height={15} alt='switch moder' className='ml-3 duration-300' />
                }
            </div>
            {isOpen && (
                <div className='absolute top-full left-0 bg-[#fff] w-[150px] border-[#ccc] rounded-5 shadow-[0px_2px_100px_rgba(0,0,0,0.1)] z-10'>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className='p-4 hover:rounded-[5px] hover:bg-[#f2f2f2] font-NunitoSansSemiBold'
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
