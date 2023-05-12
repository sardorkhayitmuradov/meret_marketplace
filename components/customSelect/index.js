import React, { useState } from "react";
import Image from "next/image";

const CustomSelect = ({ options, selectedOption, placeholder, setSelectedOption, selectWrapperClassName, selectHeaderClassName, selectContentWrapperClassName, selectContentClassName, arrowImage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <div className={selectWrapperClassName}>
            <div
                className={selectHeaderClassName}
                onClick={toggling}
            >
                <div className="flex items-center justify-between">
                    {selectedOption || placeholder}
                    <Image src={arrowImage} width={20} height={20} className={`cursor-pointer duration-200 ${isOpen && "rotate-180"}`} alt="arrow img" />
                </div>
            </div>
            {isOpen && (
                <div className={selectContentWrapperClassName}>
                    {options.map(option => (
                        <div
                            className={selectContentClassName}
                            onClick={onOptionClicked(option)}
                            key={Math.random()}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;