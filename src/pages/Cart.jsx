import React, { useCallback, useEffect, useState } from 'react';
import { getDistricts, getProvinces, getServices, getWards, selectService } from '../redux/shopping-cart/actions';
import { saveOrder, selectWard } from '../redux/shopping-cart/cartItemsSlide';
import {
  selectCalculatedFee,
  selectCart,
  selectCartTotalAmount,
  selectCartTotalProduct,
  selectDistricts,
  selectProvinces,
  selectSelectedDistrict,
  selectSelectedProvince,
  selectSelectedService,
  selectSelectedWard,
  selectServices,
  selectWards,
} from '../redux/shopping-cart/selectors';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/Button';
import CartItem from '../components/CartItem';
import {Elements} from '@stripe/react-stripe-js';
import Helmet from '../components/Helmet';
import { Link } from 'react-router-dom';
import {PaymentElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import numberWithCommas from '../utils/numberWithCommas';
import {
    selectUserInfo,
} from '../redux/authentication/selectors';
import {
    showAuthPopup,
} from '../redux/authentication/authenticationSlice';
import { useHistory } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51N433ULLrVh35nTGttKNjsPdH2UJaHzneinwVyEnI3YoyS58YTeiPe9wYv5kkBVUs1wF9amr4GJnm4Mydh2gXvMW00ucY2SeP3');

const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

const Cart = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const options = {
      // passing the client secret obtained from the server
      // clientSecret: 'sk_test_51N433ULLrVh35nTGwMt5bEWeow7JnE1NJJ9ltsuBF9nzO4w22hXRWATVWH0OBQEA2lMlnAnSokK2LosZhXks5Ap000BufyAY0J',
    };

  const cartProducts = useSelector(selectCart);
  const totalProducts = useSelector(selectCartTotalProduct);
  const totalAmount = useSelector(selectCartTotalAmount);
  const { user } = useSelector(selectUserInfo);

  const provinces = useSelector(selectProvinces)
  const districts = useSelector(selectDistricts)
  const wards = useSelector(selectWards)
  const services = useSelector(selectServices)
  const calculatedFee = useSelector(selectCalculatedFee)

  const selectedProvince = useSelector(selectSelectedProvince)
  const selectedDistrict = useSelector(selectSelectedDistrict)
  const selectedWard = useSelector(selectSelectedWard)
  const selectedService = useSelector(selectSelectedService)

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

  useEffect(() => {
    dispatch(getProvinces())
  }, [])

    const onCreateOrder = () => {
        const orders = cartProducts.map((p) => ({
            quantity: p.quantity,
            product_id: p.product.id,
            price_id: p.product.price_id,
            discount_id: p.product.discount_id,
        }));
        console.log('selectedProvince',selectedProvince)
        const add = `${address}, ${selectedWard?.WardName}, ${selectedDistrict?.DistrictName}, ${selectedProvince?.ProvinceName}`;
        console.log('add', add)
        const userInfo = {
            user_id: user?.id ?? null,
            name,
            email,
            phone,
            address: add,
        };
        dispatch(saveOrder({
            userInfo,
            orders,
            totalAmount,
        }));
        history.push("/Bill")
    };

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

  const onSelectProvince = (event) => {
    console.log('onSelectProvince', event.target.value)
    dispatch(getDistricts(event.target.value))
  }

  const onSelectDistrict = (event) => {
    console.log('event.target.value 0', event.target.value)
    console.log('selectedProvince1', selectedProvince)
    dispatch(getWards(event.target.value))
  }

  const onSelectWard = (event) => {
    console.log('event.target.value 1', event.target.value)
    console.log('selectedProvince2', selectedProvince)
    console.log('selectedDistrict', selectedDistrict)
    dispatch(getServices(event.target.value, selectedDistrict?.DistrictID))
  }

  const onSelectService = (event) => {
    console.log('event.target.value', event.target.value)
    dispatch(selectService(event.target.value, selectedDistrict?.DistrictID))
  }


  return (
      <Helmet title="Giỏ hàng">
        <div className="cart">
          <div className="cart__info">
            <div className="__deliver">
              <h1>Thông tin giao hàng</h1>
              {user
              ?
                  <div className="cart__info__account">
                      <h3>Bạn đã đăng nhập</h3>
                  </div>
              :
                  <div className="cart__info__account">
                  <h3>Bạn đã có tài khoản?</h3>

                  <div onClick={() => onShowAuthPopup(true)}  >
                  <h3 className="cart__info__account__login">Đăng nhập</h3>
                  </div>
                  </div>
              }

              {/* <form className=""> */}
                <input size="block"
                  className="cart__info__frame"
                  type="name"
                  placeholder="Họ và tên..."
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
                  placeholder="Số điện thoại..."
                  aria-label="phone"
                  value={phone}
                  onChange={onChangePhone}
                />
                <input
                  className="cart__info__frame"
                  type="address"
                  placeholder="Địa chỉ giao hàng"
                  aria-label="address"
                  value={address}
                  onChange={onChangeAddress}
                />
                {provinces?.length !== 0 && (
                  <div className="cart__select">
                    <label>
                      {'Chọn Tỉnh/Thành phố: '}
                      <select value={selectedProvince?.ProvinceID} onChange={onSelectProvince}>
                        {provinces?.map((d) => (
                          <option key={`${d.ProvinceID}-${d.Code}`} value={d.ProvinceID}>{d.ProvinceName}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                )}
                {districts?.length !== 0 && (
                  <div className="cart__select">
                    <label>
                      {'Chọn Quận/Huyện: '} 
                      <select value={selectedDistrict?.DistrictID} onChange={onSelectDistrict}>
                        {districts?.map((d) => (
                          <option key={`${d.DistrictID}-${d.Code}`} value={d.DistrictID}>{d.DistrictName}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                )}
                {wards?.length !== 0 && (
                  <div className="cart__select">
                    <label>
                      {'Chọn Phường/Xã: '} 
                      <select value={selectedWard?.WardCode} onChange={onSelectWard}>
                        {wards?.map((w) => (
                          <option key={`${w.WardID}-${w.WardCode}`} value={w.WardCode}>{w.WardName}</option>
                          // <option value={d.WardID}>{d.WardName}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                )}
                {services?.length !== 0 && (
                  <div className="cart__select">
                    <label>
                      {'Chọn loại Dịch vụ: '}
                      <select aria-label='service' value={selectedService?.service_id} onChange={onSelectService}>
                        {services?.map((d) => (
                          <option key={`${d.service_id}-${d.service_type_id}`} value={d.service_id}>{d.short_name}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                )}
              </form>
            </div>

            <div className="cart__info__txt">
              <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
              <div className="cart__info__txt__price">
                <span>Thành tiền:</span>{' '}
                <span>{numberWithCommas(Number(totalAmount))}</span>
              </div>
              {calculatedFee && (
                <div className="cart__info__txt__price">
                  <span>Tiền vận chuyển:</span>{' '}
                  <span>{numberWithCommas(Number(calculatedFee?.total))}</span>
                </div>
              )}
              <div className="cart__info__txt__price">
                <span>Tổng tiền:</span>{' '}
                <span>{numberWithCommas(Number(totalAmount + (calculatedFee?.total ?? 0)))}</span>
              </div>
            </div>
            <div onClick={onCreateOrder} className="cart__info__btn">
                <Button size="block">Đặt hàng</Button>
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
