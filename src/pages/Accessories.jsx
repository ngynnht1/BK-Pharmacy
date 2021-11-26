import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from "react-redux";

import Helmet from '../components/Helmet'
import CheckBox from '../components/CheckBox'
import { useDispatch } from 'react-redux';

import Button from '../components/Button'

import InfinityList1 from '../components/InfinityList1'
import { Breadcrumbs } from '@mui/material'
import {
    fetchCategories,
    fetchBrands,
    fetchProducts,
} from '../redux/data/actions'

const Accessories = () => {

    const dispatch = useDispatch();

    const initFilter = {
        category: [],
        brand: [],
    }

    const categories = useSelector(state => state.data.categories)
    const brands = useSelector(state => state.data.brands)
    const products = useSelector(state => state.data.products) ?? []


    const [filter, setFilter] = useState(initFilter)

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchBrands());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProducts(
            filter.category,
            filter.brand,
        ))
    }, [dispatch, filter]);

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch(type) {
                case "CATEGORY":
                    setFilter({...filter, category: [...filter.category, item.id]})
                    break
                case "BRAND":
                    setFilter({...filter, brand: [...filter.brand, item.id]})
                    break
         
                default:
            }
        } else {
            switch(type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.id)
                    setFilter({...filter, category: newCategory})
                    break
                case "BRAND":
                    const newBrand = filter.brand.filter(e => e !== item.id)
                    setFilter({...filter, brand: newBrand})
                    break
         
                default:
            }
        }
    }

    const clearFilter = () => setFilter(initFilter)

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
                                categories.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.name}
                                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                            checked={filter.category.includes(item.id)}
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
                                brands.map((item, index) => (
                                    <div key={index} className="catalog__filter__widget__content__item">
                                        <CheckBox
                                            label={item.name}
                                            onChange={(input) => filterSelect("BRAND", input.checked, item)}
                                            checked={filter.brand.includes(item.id)}
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
