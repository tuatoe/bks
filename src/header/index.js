import React, { useState, useRef, useEffect } from 'react'
import Nav from '../components/nav'
import logo from './bks_logo.png'

function Header() {
    const headerRef = useRef()
    const [isOpen, setMenu] = useState(false)
    const [status, setStatus] = useState(false)
    const toggle = e => {
        e.stopPropagation();
        setMenu(!isOpen)
        setStatus(!isOpen)
    }

    return (
        <header className="heading container menubar" ref={headerRef}>
            <div className="nav flex" >
                <img className="logo" src={logo} alt='Benjamin Karmon Sehkar Foundation' tabIndex='1' />
                <Nav status={status} onClick={toggle} />
                <div className='flex__item'>
                    <button
                        onClick={toggle}
                        id='hambmenu'
                        className={status}
                    >
                        <span />
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
            <div className='hero'>
                <h2 className='hero__title-one'>Equal Access to Quality Eduation</h2>
                <h3 className='hero__title-two'>Empowerment Through Education</h3>
                <a className='link' href="#">DONATE</a>
            </div>
            {/* <span>
            {windowWidth <= targetWidth && (<NavMobile />)}
            {!windowWidth <= targetWidth && (<NavDesktop />)}
          </span> */}

        </header>
    )
}

export default Header;
