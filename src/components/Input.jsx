import React from 'react';

function Input({
    id = null,
    onChange = () => {},
    onBlur = () => {},
    value = '',
}) {
    return (
        <input
            id={id}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            autoComplete="off"
        ></input>
    );
}

export default Input;
