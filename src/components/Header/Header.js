import React from 'react';
import logo from '../../images/logo.png';
import style from './Header.css';
import headerlogo from '../../images/logo1.png';
const Header=()=>{
    return(
        <div className='header'>
            <div className="logo">
                <img src={headerlogo} alt=""/>
                <h1>Quality Learning For EveryOne</h1>
            </div>
            <div className="nav">
                <nav>
                    <a href="/course">All Course</a>
                    <a href="/books">Books</a>
                    <a href="/bootcamps">Bootcamps</a>
                    <a href="/free-course">Free Courses</a>
                    <a href="/premium-course">Premium Course</a>
                </nav>
            </div>
        </div>
    )
}
export default Header;