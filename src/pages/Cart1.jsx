// import React, { useEffect, useState } from 'react'

// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// import Helmet from '../components/Helmet'

// import Button from '../components/Button'

// import productData1 from '../assets/fake-data/product-1'
// import numberWithCommas from '../utils/numberWithCommas'
// import CartItem1 from '../components/CartItem1'

// const Cart1 = () => {

//     const cartItems = useSelector((state) => state.cartItems.value)

//     const [cartProducts, setCartProducts] = useState(productData1.getCartItemsInfo(cartItems))

//     const [totalProducts, setTotalProducts] = useState(0)

//     const [totalPrice, setTotalPrice] = useState(0)

//     useEffect(() => {
//         setCartProducts(productData1.getCartItemsInfo(cartItems))
//         setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
//         setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
//     }, [cartItems])

//     return (
//         <Helmet title="Giỏ hàng">
//             <div className="cart">
//                 <div className="cart__info">
//                     <div className="cart__info__txt">
//                         <p>
//                             Bạn đang có {totalProducts} sản phẩm trong giỏ hàng
//                         </p>
//                         <div className="cart__info__txt__price">
//                             <span>Thành tiền:</span> <span>{numberWithCommas(Number(totalPrice))}</span>
//                         </div>
//                     </div>
//                     <div className="cart__info__btn">
//                         <Button to="/Bill" size="block">
//                             Đặt hàng
//                         </Button>
//                         <Link to="/catalog">
//                             <Button size="block">
//                                 Tiếp tục mua hàng
//                             </Button>
//                         </Link>

//                     </div>
//                 </div>
//                 <div className="cart__list">
//                     {
//                         cartProducts.map((item, index) => (
//                             <CartItem1 item={item} key={index}/>
//                         ))
//                     }
//                 </div>
//             </div>
//         </Helmet>
//     )
// }

// export default Cart1
