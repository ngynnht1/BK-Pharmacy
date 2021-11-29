// import React, { useRef } from 'react'
// import PropTypes from 'prop-types'

// import { useDispatch } from 'react-redux'
// import { updateItem, removeItem } from '../redux/shopping-cart/cartItemsSlide'

// import numberWithCommas from '../utils/numberWithCommas'
// import { Link } from 'react-router-dom'

// const CartItem = props => {
//     const { item } = props;
//     const { quantity = 0 } = item ?? {};

//     const dispatch = useDispatch()

//     const itemRef = useRef(null)

//     console.log('item', item);

//     const updateQuantity = (shouldAddUp) => {
//         if (shouldAddUp) {
//             dispatch(updateItem({...item, quantity: quantity + 1}))
//         } else {
//             dispatch(updateItem({...item, quantity: quantity - 1}))
//         }
//     }

//     const removeCartItem = () => {
//         dispatch(removeItem(item))
//     }

//     if (!item) return null;
//     return (
//         <div className="cart__item" ref={itemRef}>
//             <div className="cart__item__image">
//                 {item?.product?.image01 && <img src={item.product.image01} alt="" />}
//             </div>
//             <div className="cart__item__info">
//                 <div className="cart__item__info__name">
//                     <Link to={`/catalog/${encodeURIComponent(item.slug ?? '')}`}>
//                         {`${item.product.name}`}
//                     </Link>
//                 </div>
//                 <div className="cart__item__info__price">
//                     {numberWithCommas(item.price)}
//                 </div>
//                 <div className="cart__item__info__quantity">
//                     <div className="product__info__item__quantity">
//                         <div className="product__info__item__quantity__btn" onClick={() => updateQuantity(false)}>
//                             <i className="bx bx-minus"></i>
//                         </div>
//                         <div className="product__info__item__quantity__input">
//                             {quantity}
//                         </div>
//                         <div className="product__info__item__quantity__btn" onClick={() => updateQuantity(true)}>
//                             <i className="bx bx-plus"></i>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="cart__item__del">
//                     <i className='bx bx-trash' onClick={() => removeCartItem()}></i>
//                 </div>
//             </div>
//         </div>
//     )
// }

// CartItem.propTypes = {
//     item: PropTypes.object
// }

// export default CartItem
