import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Helmet from '../components/Helmet'
import {
  createOrder,
} from '../redux/shopping-cart/actions';
import {
  selectDraftOrder
} from '../redux/shopping-cart/selectors';
import { useHistory } from "react-router-dom";

const Bill = () => {

  const dispatch = useDispatch();
  const draftOrder = useSelector(selectDraftOrder);
  const history = useHistory();

  const onCreateOrder = useCallback(() => {
    console.log('draftOrder', draftOrder);
    dispatch(createOrder(draftOrder.userInfo, draftOrder.orders, draftOrder.totalAmount));
  }, [dispatch, draftOrder]);

  useEffect(() => {
    if (!draftOrder) {
      history.push("/");
    }
  }, [draftOrder, history]);

  return (
    <Helmet title="deliver">
      {/* <div clasName="deliver__title">
        <h1>Phương thức vận chuyển</h1>
      </div>

      <div className="deliver__home">
        <input type="checkbox" className="deliver__home__checkbox" />
        <div className="deliver__home__content">Giao hàng tận nơi</div>
        <div className="deliver__home__price">0 đ</div>
      </div> */}

      <div clasName="deliver__title">
        <h1>Phương thức thanh toán</h1>
      </div>

      <div className="deliver__payment">
        <div className="deliver__payment__form">
        <input type="checkbox" className="checkbox"/>
          <label className="deliver__payment__form__title">Thanh toán khi giao hàng (COD)</label>
        </div>
        <div className="deliver__payment__form__advertise">
          Là phương thức khách hàng nhận hàng mới trả tiền. Áp dụng với tất cả các đơn hàng trên toàn quốc
        </div>
      </div>

      <button onClick={onCreateOrder} size="block" className="deliver__button">
        Hoàn tất đơn hàng
      </button>
    </Helmet>

  )
}

export default Bill
