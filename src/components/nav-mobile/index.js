import React from 'react'

function Nav({ status, onClick }) {
    return (
        <nav className={status} id='menu'>
            <ul>
                <li><a onClick={onClick} className="link" href="">About us</a></li>
                <li><a onClick={onClick} className="link" href="">What we do</a></li>
                <li><a onClick={onClick} className="link" href="">How you can help</a></li>
                <li><a onClick={onClick} className="link" href="">Eevents</a></li>
                <li><a onClick={onClick} className="link" href="">Gallery</a></li>
                <li><a onClick={onClick} className="link" href="">Contact</a></li>
                <li><a onClick={onClick} className="link" href="">Donate</a></li>
            </ul>
        </nav>
    )
}

export default Nav;