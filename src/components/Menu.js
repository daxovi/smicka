import React from 'react'

const Menu = ({ onItemClick, activePage }) => {
    return (
        <div className='container'>
            <nav>
                <ul>
                    <li className={activePage === 0 ? 'active' : ''} onClick={() => onItemClick(0)}>Naše služby</li>
                    <li className={activePage === 1 ? 'active' : ''} onClick={() => onItemClick(1)}>Reference</li>
                    <li className={activePage === 2 ? 'active' : ''} onClick={() => onItemClick(2)}>Kontakt</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu