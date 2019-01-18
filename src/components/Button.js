import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.onClick} className="form-button">
            {props.message}
        </button>
    );
};

export default Button;
