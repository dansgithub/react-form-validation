import React from 'react';

const Button = (props) => {
    return (
        <button className="form-button">
            {props.message}
        </button>
    );
};

export default Button;
