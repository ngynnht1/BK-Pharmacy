import { AccountCircle, ContactPage, Search, ShoppingBag } from '@mui/icons-material'
import { Link, useLocation } from 'react-router-dom'
import React, { useCallback, useEffect, useRef } from 'react'
import {
    selectShowAuthPopup,
    selectUserInfo,
} from '../redux/authentication/selectors';

import Login from './login/Login';
import Popup from './login/Popup';
import logo from '../assets/images/Logo3.png'
import {
    showAuthPopup,
} from '../redux/authentication/authenticationSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import {useState} from 'react';

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

    const dispatch = useDispatch();

    // const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === 'ss')

    const isShowAuthPopup = useSelector(selectShowAuthPopup);

    const headerRef = useRef(null)
    const {
        user,
    } = useSelector(selectUserInfo);

    const onShowAuthPopup = useCallback((shouldShow) => {
        dispatch(showAuthPopup(shouldShow));
    }, [dispatch]);

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
            onShowAuthPopup(true);
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
                        <Popup trigger={isShowAuthPopup} setTrigger={onShowAuthPopup}>
                            <Login/>
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
