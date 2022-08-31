import React from 'react';
import './Header.css';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from '../StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (        
        <div className="header">
            <Link to="/">
            <div className="header-logo">
                    <StorefrontOutlinedIcon className="header-logo-container"></StorefrontOutlinedIcon>
                    <h2 className="header-logo-title">eShop</h2>
                </div>

            </Link>
            

            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header-search-icon" />
            </div>

            <div className="header-nav">
                <div className=" header-option-main">
                    <span className="header-option-one">Hello, Guest</span>
                    <span className="header-option-two">Sign In</span>
                </div>

                <div className="header-option">
                    <span className="header-option-one">Your</span>
                    <span className="header-option-two">Shop</span>
                </div>

            </div>

            <Link to="/checkout" className="link">
                <div className="header-option-basket">
                    <ShoppingBasketIcon className="header-basket-icon" />
                    <span className="header-option-two header-basket-count">{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header
