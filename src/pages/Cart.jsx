import React, { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet';
import CartItem from '../components/CartItem';
import Button from '../components/Button';

import numberWithCommas from '../utils/numberWithCommas';

import {
  selectCart,
  selectCartTotalProduct,
  selectCartTotalAmount,
} from '../redux/shopping-cart/selectors';
import { saveOrder } from '../redux/shopping-cart/cartItemsSlide';
import { useHistory } from "react-router-dom";
import {
    selectUserInfo,
} from '../redux/authentication/selectors';
import {
    showAuthPopup,
} from '../redux/authentication/authenticationSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const history = useHistory();

  const cartProducts = useSelector(selectCart);
  const totalProducts = useSelector(selectCartTotalProduct);
  const totalAmount = useSelector(selectCartTotalAmount);
  const { user } = useSelector(selectUserInfo);

  const onShowAuthPopup = useCallback((shouldShow) => {
    dispatch(showAuthPopup(shouldShow));
}, [dispatch]);

  const [name, setName] = useState(user?.name ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [phone, setPhone] = useState(user?.phone ?? '');
  const [address, setAddress] = useState(user?.address ?? '');

  useEffect(() => {
    if (user) {
        setName(user?.name ?? '');
        setEmail(user?.email ?? '');
        setPhone(user?.phone ?? '');
        setAddress(user?.address ?? '');
    }
  }, [user]);

    const onCreateOrder = useCallback(() => {
        const orders = cartProducts.map((p) => ({
            quantity: p.quantity,
            product_id: p.product.id,
            price_id: p.product.price_id,
            discount_id: p.product.discount_id,
        }));
        const userInfo = {
            user_id: user?.id ?? null,
            name,
            email,
            phone,
            address,
        };
        dispatch(saveOrder({
            userInfo,
            orders,
            totalAmount,
        }));
        history.push("/Bill")
    }, [address, cartProducts, dispatch, email, history, name, phone, totalAmount, user?.id]);

  const onChangeName = (event) => {
    setName(event.target.value);
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  }

  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  }


  return (
    <Helmet title="Gi??? h??ng">
      <div className="cart">
        <div className="cart__info">
          <div className="__deliver">
            <h1>Th??ng tin giao h??ng</h1>
            {user
            ?
                <div className="cart__info__account">
                    <h3>B???n ???? ????ng nh???p</h3>
                </div>
            :
                <div className="cart__info__account">
                <h3>B???n ???? c?? t??i kho???n?</h3>

                <div onClick={() => onShowAuthPopup(true)}  >
                <h3 className="cart__info__account__login">????ng nh???p</h3>
                </div>
                </div>
            }

            {/* <form className=""> */}
              <input size="block"
                className="cart__info__frame"
                type="name"
                placeholder="H??? v?? t??n..."
                aria-label="name"
                value={name}
                onChange={onChangeName}
              />
            {/* </form> */}
            <form className="">
              <input
                className="cart__info__frame"
                type="email"
                placeholder="Email..."
                aria-label="email"
                value={email}
                onChange={onChangeEmail}
              />
              <input
                className="cart__info__frame"
                type="phone"
                placeholder="S??? ??i???n tho???i..."
                aria-label="phone"
                value={phone}
                onChange={onChangePhone}
              />
              <input
                className="cart__info__frame"
                type="address"
                placeholder="?????a ch??? giao h??ng"
                aria-label="address"
                value={address}
                onChange={onChangeAddress}
              />
            </form>
          </div>

          <div className="cart__info__txt">
            <p>B???n ??ang c?? {totalProducts} s???n ph???m trong gi??? h??ng</p>
            <div className="cart__info__txt__price">
              <span>Th??nh ti???n:</span>{' '}
              <span>{numberWithCommas(Number(totalAmount))}</span>
            </div>
          </div>
          <div onClick={onCreateOrder} className="cart__info__btn">
              <Button size="block">?????t h??ng</Button>
          </div>
          <div className="cart__info__btn">
            <Link to="/accessories">
              <Button size="block">Ti???p t???c mua h??ng</Button>
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
