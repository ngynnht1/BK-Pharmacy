import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet';
import CartItem from '../components/CartItem';
import Button from '../components/Button';

import productData1 from '../assets/fake-data/product-1';
import numberWithCommas from '../utils/numberWithCommas';

import Popup from '../components/login/Popup';
import Login from '../components/login/Login';

import {
  selectCart,
  selectCartTotalProduct,
  selectCartTotalAmount,
} from '../redux/shopping-cart/selectors';
const Cart = () => {
  const cartProducts = useSelector(selectCart);
  const totalProducts = useSelector(selectCartTotalProduct);
  const totalPrice = useSelector(selectCartTotalAmount);

  const [buttonPopup, setButtonPopup] = useState(false);
  // const [cartProducts, setCartProducts] = useState(productData1.getCartItemsInfo1(cartItems))

  // useEffect(() => {
  //     setCartProducts(productData1.getCartItemsInfo1(cartItems))
  //     setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
  //     setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
  // }, [cartItems])

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="__deliver">
            <h1>Thông tin giao hàng</h1>
            <div className="cart__info__account">
              <h3>Bạn đã có tài khoản?</h3>

              <div onClick={() => setButtonPopup(true)}  >
              <h3 className="cart__info__account__login">Đăng nhập</h3>
              </div>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <Login/>
              </Popup>

            </div>

            {/* <form className=""> */}
              <input size="block"
                className="cart__info__frame"
                type="name"
                placeholder="Họ và tên..."
                aria-label="name"
              />
            {/* </form> */}
            <form className="">
              <input
                className="cart__info__frame"
                type="email"
                placeholder="Email..."
                aria-label="email"
              />
              <input
                className="cart__info__frame"
                type="phone"
                placeholder="Số điện thoại..."
                aria-label="phone"
              />
            </form>

            <div className="">
              <select className="cart__info__province">
                <option selected>Chọn tỉnh / thành</option>
                <option>Thành phố Hồ Chí Minh</option>
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
                <option>Other</option>
              </select>

              <select className="cart__info__district">
                <option selected>Chọn quận / huyện</option>
                <option>Bến Cầu</option>
                <option>Hải Châu</option>
                <option>Hòa Bình</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền:</span>{' '}
              <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Link to="/Bill">
              <Button size="block">Đặt hàng</Button>
            </Link>
          </div>
          <div className="cart__info__btn">
            <Link to="/accessories">
              <Button size="block">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
