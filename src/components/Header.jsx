import { AccountCircle, ContactPage, Search, ShoppingBag } from '@mui/icons-material'
import React, { useRef, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/Logo3.png'

import Popup from './login/Popup';
import Login from './login/Login';

import {useState} from 'react';
import { useSelector } from 'react-redux';
import {
    selectUserInfo,
} from '../redux/authentication/selectors';

const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/accessories"
    },
    {
        display: "Giới thiệu",
        path: "/Introduction"
    },
    {
        display: "Giao hàng",
        path: "/DeliveryPoli"
    },

]

const Header = () => {

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)
    const {
        user,
    } = useSelector(selectUserInfo);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll",  null);
        };
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    const [buttonPopup, setButtonPopup] = useState(false);

    const onUserIconTapped = useCallback(() => {
        if (user) {
            console.log('user logged in');
        } else {
            setButtonPopup(true);
        }
    }, [user]);

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">

                    <Link to="/">

                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                                <Search/>
                        </div>

                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <ShoppingBag/>
                            </Link>
                        </div>

                        {user
                        ?
                            <div className="header__menu__item header__menu__right__item">
                                <Link to="/Profile">
                                    <ContactPage/>
                                </Link>
                            </div>
                        :
                            <div onClick={onUserIconTapped} className="header__menu__item header__menu__right__item">
                                    <AccountCircle/>
                            </div>                            
                        }
                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                            <Login/>
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
