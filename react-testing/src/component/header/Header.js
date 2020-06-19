import React from 'react'
import './styles.scss'
import Logo from './../../assets/graphics/logo.png'

export default function Header() {
    return (
        <header data-test="header">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logoIMG" src={Logo} alt='Logo'></img>
                </div>
            </div>
        </header>
    )
}
