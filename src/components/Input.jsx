import React from 'react';

function Input({
    id = null,
    name = null,
    onChange = () => {},
    onBlur = () => {},
    value = '',
    cheacked = null,
    type = 'text',
}) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            checked={cheacked}
            autoComplete="off"
        ></input>
    );
}

export default Input;
