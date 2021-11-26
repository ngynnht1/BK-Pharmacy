import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { set } from '../redux/product-modal/productModalSlice'

import Button from './Button'

import numberWithCommas from '../utils/numberWithCommas'

const ProductCard1 = ({
    slug,
    product,
}) => {

    const dispatch = useDispatch()

    return (
        <div className="product-card">
            <Link to={`/accessories/${product?.slug ? encodeURIComponent(product.slug) : ''}`}>
                <div className="product-card__image">
                    {product?.image01 && <img src={product.image01} alt="" />}
                    {product?.image02 && <img src={product.image02} alt="" />}
                    {product?.image03 && <img src={product.image03} alt="" />}
                </div>
                <h3 className="product-card__name">{product?.name ?? ''}</h3>
                {product?.discount
                ?
                    <div className="product-card__price">
                        {numberWithCommas(Number(product.price) * (1 - Number(product.discount)/100))}
                        <span className="product-card__price__old">
                            <del>{numberWithCommas(product.price)}</del>
                        </span>
                    </div>
                :
                    <div className="product-card__price">
                        {numberWithCommas(product?.price ?? 0)}
                    </div>
                }
            </Link>
            <div className="product-card__btn">
                <Button
                    size="sm"    
                    icon="bx bx-cart"
                    animate={true}
                    onClick={() => product?.slug && dispatch(set(encodeURIComponent(product.slug)))}
                >
                    Chọn mua
                </Button>
            </div>
        </div>
    )
}

ProductCard1.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    product: PropTypes.object.isRequired,
}

export default ProductCard1
