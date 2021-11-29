import React from 'react'
import CartItem1 from '../components/CartItem1'
import Helmet from '../components/Helmet'
// import Form from 'react-bootstrap/Form'

const Bill = () => {
  return (
    <Helmet title="deliver">
      <div clasName="deliver__title">
        <h1>Phương thức vận chuyển</h1>
      </div>

      <div className="deliver__home">
        <input type="checkbox" className="deliver__home__checkbox" />
        <div className="deliver__home__content">Giao hàng tận nơi</div>
        <div className="deliver__home__price">0 đ</div>
      </div>

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

      <button size="block" className="deliver__button">
        Hoàn tất đơn hàng
      </button>
    </Helmet>

  )
}

export default Bill