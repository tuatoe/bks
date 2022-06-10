import React, { useState, useRef } from 'react';
import NavMobile from '../components/nav-mobile'
import NavDesktop from '../components/nav-desktop/NavDesktop'
import logo from './bks_logo.png'

function Header() {
    const headerRef = useRef()
    const [isOpen, setMenu] = useState(false)

    const toggle = e => {
        e.stopPropagation();
        setMenu(!isOpen)
    }

    return (
        <header className='heading container menubar' ref={headerRef}>
            <div className='nav flex' >
                <img className='logo' src={logo} alt='Benjamin Karmon Sehkar Foundation' tabIndex='1' />
                <div className='nav-mobile'>
                    <NavMobile status={isOpen ? 'isopen' : ''} onClick={toggle} />
                    <div className='flex__item'>
                        <button
                            onClick={toggle}
                            id='hambmenu'
                            className={isOpen ? 'isopen' : ''}
                        >
                            <span />
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
                <NavDesktop />
            </div>
            <div className='hero'>
                <h2 className='hero__title-one'>Equal Access to Quality Eduation</h2>
                <h3 className='hero__title-two'>Empowerment Through Education</h3>
                <a className='link' href='#'>DONATE</a>
            </div>
        </header>
    )
}

export default Header;
