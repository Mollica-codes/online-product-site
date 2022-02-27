import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../Context';
export default function Header() {
    const {clearFilter, cartCount} = useContext(Context)
    return (
        <header className="header-wrapper">
            <Link to="/" className="router-link"><h1 className="header-company-title" onClick={()=> clearFilter()}>BeautyCo</h1></Link>   
            <div className="header-search-bar">
                <input className="header-search-input" type='text' name='search' placeholder="Search Bar" />
                <button className="header-search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <p className="header-login">Login <i class="fa-solid fa-user"></i></p>
            <p className="header-returns"> Returns<br /> and Orders</p>
            <Link to="/cart" className="router-link"><p className="header-cart-icon"><i class="fa-solid fa-cart-shopping"></i>{cartCount}</p></Link>
        </header>
    )
}
