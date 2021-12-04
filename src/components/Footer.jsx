import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo3.png'
import './Map.js'


const footerAboutLinks = [
    // {
    //     display: "Giới thiệu",
    //     path: "/about"
    // },
    {
        display: "Tại Pharmacity, mỗi dược sỹ luôn tận tâm phục vụ và được đào tạo để hoàn thành xuất sắc những sứ mệnh được giao.",
        path: "/about"
    },
    {
        display: "Hỗ trợ đơn hàng doanh nghiệp",
        path: "/about"
    },
    {
        display: "groupb2b@pharmacy.vn",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Trụ sở: 240A Nơ Trang Long, Q. Bình Thạnh, TP. Hồ Chí Minh"

    },
    {
        display: "Điện thoại: 1800 6821, email: cskh@pharmacy.vn"

    },
    {
        display: "GPDKKD: 0311770883"

    },
    {
        display: "Do sở KH & ĐT TP.HCM cấp lần đầu ngày 05/05/2012, đăng ký thay đổi lần thứ: 49, ngày 20/01/2018."

    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={5}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div className="footer__map">
                    <iframe className="footer__map__image"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.8756236617819!2d106.69818758221511!3d10.772773001355503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f54cba5ce41%3A0xfcf2a406f8355198!2sPharmacity!5e0!3m2!1svi!2s!4v1637220198289!5m2!1svi!2s"
                        title="Pharmacy shop"
                        width="300"
                        height="200"
                        style={{border:0 }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                    </div>
                    <div>
                        <div className="footer__title">
                            <h3>Về Pharmacy</h3>
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                           <h3>Công Ty Dược Phẩm Pharmacy</h3>
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                           <h3>Công Ty Dược Phẩm Pharmacy</h3>
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <div className="footer__content">
                        <p> Tại Pharmacy, mỗi dược sỹ luôn tận tâm phục vụ và được đào tạo để hoàn thành xuất sắc những sứ mệnh được giao.</p>
                        </div>

                       
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
