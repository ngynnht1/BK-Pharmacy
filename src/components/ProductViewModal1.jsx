import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'



import Button from './Button'

import { remove } from '../redux/product-modal/productModalSlice'

// import productData1 from '../assets/fake-data/product-1'
import ProductView1 from './ProductView1'

import {
    selectProductBySlug,
} from '../redux/data/selectors';

const ProductViewModal1 = () => {

    const productSlug = useSelector((state) => state.productModal.value)
    const product = useSelector(selectProductBySlug(productSlug))
    const dispatch = useDispatch()

    // const [product, setProduct] = useState(undefined)

    // useEffect(() => {
    //     console.log('productSlug', productSlug);
    //     setProduct(productData1.getProductBySlug1(productSlug))
    // }, [productSlug]);

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView1 product={product}/>
                <div className="product-view__modal__content__close">
                    <Button
                        size="sm"    
                        onClick={() => dispatch(remove())}
                    >
                        đóng
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal1
