import React, { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'

function DesktopNav() {
    const subNavRef = useRef()
    const [isVisible, setIsVisible] = useState(false)

    const subNav = [
        {
            path: '/usb-grid/examples/example-one',
            name: 'Two equal-width columns',
        },
        {
            path: '/usb-grid/examples/example-two',
            name: 'Example two',
        },
        {
            path: '/usb-grid/examples/example-three',
            name: 'Example three',
        },
        {
            path: '/usb-grid/examples/example-four',
            name: 'Example four',
        },
    ];

    const handleSubNav = () => {
        setIsVisible(!isVisible)
    }

    return (
        <nav className="nav-desktop">
            <ul>
                <li><a className="link" href="">About us</a></li>
                <li><a className="link" href="">What we do</a></li>
                <li><a className="link" href="">How you can help</a></li>
                <li><a className="link" href="">Eevents</a></li>
                <li><a className="link" href="">Gallery</a></li>
                <li><a className="link" href="">Contact</a></li>
                <li><a className="link" href="">Donate</a></li>
            </ul>
        </nav>
    )
}

export default DesktopNav;