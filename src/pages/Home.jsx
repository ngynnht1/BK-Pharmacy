import React, { useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'

import Grid from '../components/Grid'


import heroSliderData from '../assets/fake-data/hero-slider'
import productData1 from '../assets/fake-data/product-1'

import banner from '../assets/images/banner.png'
import ProductCard1 from '../components/ProductCard1'
import { useDispatch, useSelector } from 'react-redux';
import banner2 from '../assets/images/banner2.png'

import {
    selectTopProducts,
    selectPopularProducts,
    selectNewProducts
} from '../redux/data/selectors';
import {
    fetchTopProducts,
    fetchPopularProducts,
    fetchNewProducts
} from '../redux/data/actions';


const Home = () => {

    const dispatch = useDispatch();
    const topProducts = useSelector(selectTopProducts);
    const popularProducts = useSelector(selectPopularProducts);
    const newProducts = useSelector(selectNewProducts);

    console.log('topProducts', topProducts);

    const dispatchFetchTopProducts = useCallback(() => {
        dispatch(fetchTopProducts());
    }, [dispatch]);

    const dispatchFetchPopularProducts = useCallback(() => {
        dispatch(fetchPopularProducts());
    }, [dispatch]);

    const dispatchFetchNewProducts = useCallback(() => {
        dispatch(fetchNewProducts());
    }, [dispatch]);


    useEffect(() => {
        dispatchFetchNewProducts();
        dispatchFetchPopularProducts();
        dispatchFetchTopProducts();
    }, [dispatchFetchNewProducts, dispatchFetchPopularProducts, dispatchFetchTopProducts]);

    return (
        <Helmet title="Trang chủ">
            {/* hero slider */}
     
           
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={false}
                timeOut={5000}
            />
            {/* end hero slider */}

            {/* policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={6}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                  
                    </Grid>
                </SectionBody>
            </Section>
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner2} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            {/* end policy section */}

            {/* best selling section */}
            <Section>
                <SectionTitle>
                    Top sản phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    {topProducts.length !== 0 &&
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            topProducts.map((item, index) => (
                                <ProductCard1
                                    key={index}
                                    product={item}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                    }
                </SectionBody>
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    sản phẩm mới
                </SectionTitle>
                <SectionBody className="new-product">
                    {newProducts.length !== 0 &&
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            newProducts.map((item, index) => (
                                <ProductCard1
                                    key={index}
                                    product={item}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                    }
                </SectionBody>
            </Section>
            {/* end new arrival section */}

            {/* banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            {/* end banner */}

            {/* popular product section */}
            <Section>
                <SectionTitle>
                    Phổ biến
                </SectionTitle>
                <SectionBody>
                    {popularProducts.length !== 0 &&
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            popularProducts.map((item, index) => (
                                <ProductCard1
                                    key={index}
                                    product={item}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                    }
                </SectionBody>
            </Section>
            {/* end popular product section */}
        </Helmet>
    )
}

export default Home
