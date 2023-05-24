import React from 'react';

export const Menu = ({ isVisible, onChange, children }) => {
    return (
        <div
            className={`w-full h-full modal-wrapper fixed top-0 bottom-0 z-20 flex overflow-auto transition-right duration-300 ease-in-out transform right-0 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div
                onClick={() => onChange(false)}
                className='menu-content w-[63%] h-full'>
            </div>
            {children}
        </div>
    )
}
