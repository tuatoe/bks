import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import Hamburger from '../hamburger/Hamburger';

function NavMobile() {
    const hamburgerRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useLayoutEffect(() => {
        let links = document.querySelectorAll('.link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                links.forEach(link => link.classList.remove('is-active'));
                link.classList.add('is-active');
                setIsOpen(false)
            });
        });
    }, [])

    useEffect(() => {
        const hamburger = hamburgerRef.current;
        hamburger.addEventListener('click', () => {
            setIsOpen(!isOpen)
        })
    }, [isOpen])

    return (
        <>
            <Hamburger ref={hamburgerRef} isOpen={isOpen} />
            <nav className={isOpen ? 'nav-mobile isOpen' : 'nav-mobile'}>
                <ul className="nav-mobile__menu">
                    <ul>
                        <li><a className="link is-active" href="">About us</a></li>
                        <li><a className="link" href="">What we do</a></li>
                        <li><a className="link" href="">How you can help</a></li>
                        <li><a className="link" href="">Eevents</a></li>
                        <li><a className="link" href="">Gallery</a></li>
                        <li><a className="link" href="">Contact</a></li>
                        <li><a className="link" href="">Donate</a></li>
                    </ul>
                </ul>
            </nav>
        </>
    )
}

export default NavMobile;