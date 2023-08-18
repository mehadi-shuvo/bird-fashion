import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/product-slice';
import Card from '../../components/Card/Card';
import { visitedAction } from '../../store/visited-slice';

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const visitedProducts = useSelector(state => state.visited.showVisited);
    // console.log(visitedProducts);
    const jewelery = products.products.filter(item => item.category === 'jewelery')
    const women = products.products.filter(item => item.category === "women's clothing")
    const men = products.products.filter(item => item.category === "men's clothing")
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(visitedAction.showActivity())
    }, [dispatch])
    // console.log(products);
    return (
        <div>
            <Banner></Banner>
            <div className='w-4/5 mx-auto'>
                {products.isLoading ? <p>is loading</p>
                    : <div>
                        {
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
                        }
                        <div className='my-10'>

                            <div className='flex gap-10'>
                                <h1 className='text-5xl font-extrabold uppercase mb-8'>jewelery Zoon</h1>
                                <div className='bg-[#2ab3fd] flex-grow mb-8'></div>
                            </div>
                            <div className='grid grid-cols-3 gap-5'>
                                {
                                    jewelery.slice(0, 3).map(item => <Card key={item.id} item={item}>

                                    </Card>)
                                }
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
                        </div>


                    </div>}
            </div>
        </div>
    );
};

export default Home;