import React from 'react';

const LoadingSpinner = (props) => {
    return (
        <div className="loading">
            {props.message}
        </div>
    );
};

export default LoadingSpinner;
