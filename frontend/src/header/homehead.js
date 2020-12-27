import React from 'react'
import './Header.css'
// npm install @material-ui/icons
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className='header'>
            <Link to='/'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>


            <div className="header__nav">
                <Link to='/signin'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
