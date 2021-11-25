import React, { useCallback, useState, useEffect, useRef } from 'react'

import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'


import Button from '../components/Button'

import productData1 from '../assets/fake-data/product-1'
import InfinityList1 from '../components/InfinityList1'
import brand from '../assets/fake-data/product-brand'
import category_copy from '../assets/fake-data/category_copy'
import { Breadcrumbs } from '@mui/material'

const Accessories = () => {

    const initFilter = {
        category: [],
        brand: [],
    }

    const productList = productData1.getAllProducts1()

    const [products, setProducts] = useState(productList)

    const [filter, setFilter] = useState(initFilter)

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch(type) {
                case "CATEGORY":
                    setFilter({...filter, category: [...filter.category, item.categorySlug]})
                    break
                case "BRAND":
                    setFilter({...filter, brand: [...filter.brand, item.brand]})
                    break
         
                default:
            }
        } else {
            switch(type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({...filter, category: newCategory})
                    break
                case "BRAND":
                    const newBrand = filter.brand.filter(e => e !== item.brand)
                    setFilter({...filter, brand: newBrand})
                    break
         
                default:
            }
        }
    }

    const clearFilter = () => setFilter(initFilter)

    const updateProducts = useCallback(
        () => {
            let temp = productList

            if (filter.category.length > 0) {
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }

            if (filter.brand.length > 0) {
                temp = temp.filter(e => {
                    const check = e.brand.find(brand => filter.brand.includes(brand))
                    return check !== undefined
                })
            }

        

            setProducts(temp)
        },
        [filter, productList],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    const filterRef = useRef(null)

    const showHideFilter = () => filterRef.current.classList.toggle('active')

    return (
        <Helmet title="Sản phẩm">
          
            <div className="catalog">
                <div className="catalog__filter" ref={filterRef}>
                    <div className="catalog__filter__close" onClick={() => showHideFilter()}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            danh mục sản phẩm
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                category_copy.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                            checked={filter.category.includes(item.categorySlug)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">
                            Brand name
                        </div>
                        <div className="catalog__filter__widget__content">
                            {
                                brand.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.display}
                                            onChange={(input) => filterSelect("BRAND", input.checked, item)}
                                            checked={filter.brand.includes(item.brand)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                  

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm" onClick={clearFilter}>xóa bộ lọc</Button>
                        </div>
                    </div>
                </div>
                <div className="catalog__filter__toggle">
                    <Button size="sm" onClick={() => showHideFilter()}>bộ lọc</Button>
                </div>
                <div>
                <Breadcrumbs/>
                </div>
                <div className="catalog__content">
                    <InfinityList1
                        data={products}
                    />
                </div>
            </div>
        </Helmet>
    )
}

export default Accessories
