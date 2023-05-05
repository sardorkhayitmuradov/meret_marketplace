import React from "react";

export const Input = ({
    type,
    nameValue,
    placeholder,
    className,
    value,
    onGetValue,
}) => {
    const onHandleChange = (e) => {
        onGetValue(e);
    };
    return (
        <input
            type={type}
            name={nameValue}
            id={nameValue}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onHandleChange}
        />
    );
};
