import {
  checkout,
  checkoutSuccess,
  getOrdersSuccess,
} from './cartItemsSlide';
import api from '../../api';

export const createOrder = (userInfo, orders, totalAmount) => async dispatch => {
  try {
    dispatch(checkout());
    console.log('userInfo', userInfo);
    console.log('orders', orders);
    console.log('totalAmount', totalAmount);
    await api.post('/order/create.php', {
      user_id: userInfo.user_id,
      email: userInfo.email,
      name: userInfo.name,
      phone: userInfo.phone,
      address: userInfo.address,
      order_items: orders,
      total_amount: totalAmount,
    })
      .then((_response) => {
        console.log('_response', _response);
        dispatch(checkoutSuccess());
      });
  } catch (e) {
    console.log(e);
  }
}

export const getUserOrders = (userId) => async dispatch => {
  try {
    await api.post('/order/read.php', {
      user_id: userId
    })
    .then((response) => {
      dispatch(getOrdersSuccess(response.data.data));
    });
  } catch (e) {
    console.log(e);
  }
}
