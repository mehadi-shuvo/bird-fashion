import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, productsActions } from '../../store/product-slice';
import Card from '../../components/Card/Card';
import { visitedAction } from '../../store/visited-slice';
import { Link } from 'react-router-dom';
import { categoryActions, fetchCategoryProducts } from '../../store/category-product';
import { useGetAllProductsQuery } from '../../store/products-slice';
import { ThreeDots } from 'react-loader-spinner';
import Heading from '../../components/Card/Heading';

const Home = () => {
    const { data: allProducts, isLoading } = useGetAllProductsQuery();
    if (isLoading) {
        return <div className='h-screen w-full flex justify-center items-center bg-[#00000073]'>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#2AB3FD"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }
    const categoryPageHandler = (e) => {

    }

    const jewelery = allProducts.filter(item => item.category === 'jewelery');
    const women = allProducts.filter(item => item.category === "women's clothing")
    const men = allProducts.filter(item => item.category === "men's clothing")
    return (
        <div>
            <Banner></Banner>
            <div className='w-4/5 mx-auto'>
                <div>
                    {/* {
                            visitedProducts && <div className='my-10'>

                                <div className='flex gap-10'>
                                    <h1 className='text-5xl font-extrabold uppercase mb-8'>Recently View</h1>
                                    <div className='bg-[#2ab3fd] flex-grow mb-8'></div>
                                </div>
                                <div className='grid grid-cols-3 gap-5'>
                                    {
                                        visitedProducts.slice(0, 6).map(item => <Card key={item.id} item={item}>

                                        </Card>)
                                    }
                                </div>
                            </div>
                        } */}
                    <div className='my-10'>

                        <Heading title={'jewelery Zoon'}></Heading>
                        
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                jewelery.slice(0, 3).map(item => <Card key={item.id} item={item}>

                                </Card>)
                            }
                        </div>
                        <div className='flex justify-center mt-6'>

                            <Link to={`/jewelery`}>
                                <button onClick={() => categoryPageHandler("jewelery")} className='my-btn p-10'
                                >See More</button></Link>

                        </div>
                    </div>
                    <div className='my-10'>

                        <div className='flex gap-10'>
                            <h1 className='text-5xl font-extrabold uppercase mb-8'>Men Zoon</h1>
                            <div className='bg-[#2ab3fd] flex-grow mb-8'></div>
                        </div>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                men.slice(0, 3).map(item => <Card key={item.id} item={item}>

                                </Card>)
                            }
                        </div>
                        <div className='flex justify-center mt-6'>
                            <Link><button onClick={() => categoryPageHandler("men's clothing")} className='my-btn p-10'>See More</button></Link>
                        </div>
                    </div>
                    <div className='my-10'>
                        <div className='flex gap-10'>
                            <h1 className='text-5xl font-extrabold uppercase mb-8 '>Women Zoon</h1>
                            <div className='bg-[#2ab3fd] flex-grow mb-8'></div>
                        </div>
                        <div className='grid grid-cols-3 gap-5'>
                            {
                                women.slice(0, 3).map(item => <Card key={item.id} item={item}>

                                </Card>)
                            }
                        </div>
                        <div className='flex justify-center mt-6'>
                            <Link><button onClick={() => categoryPageHandler("women's clothing")} className='my-btn p-10'>See More</button></Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;