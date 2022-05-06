import React from 'react';

const Hamburger = React.forwardRef(({ isOpen }, forwardRef) => {
    return (
        <button ref={forwardRef} className="hamburger">
            <div className={isOpen ? 'burger burger1 isOpen' : 'burger burger1'} />
            <div className={isOpen ? 'burger burger2 isOpen' : 'burger burger2'} />
            <div className={isOpen ? 'burger burger3 isOpen' : 'burger burger3'} />
        </button>
    )
});

export default Hamburger;