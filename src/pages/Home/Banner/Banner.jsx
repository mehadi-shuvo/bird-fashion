import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-full py-20 banner1 banner'>
                        <div className='w-4/5 mx-auto text-white'>
                            <div className='mx-10'>
                                <h4 className='text-5xl font-extrabold text-[#2AB3FD] capitalize'>Authentic women Cloths <span className='block text-white'>on Bird Fashion</span></h4>
                                <p className='text-white text-lg my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, qui? Minus mollitia sequi itaque quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, labore?</p>
                                <button className='my-btn'><Link to='/home'>See More</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full py-20 banner2 banner'>
                        <div className='w-4/5 mx-auto text-white'>
                            <div className='mx-10'>
                                <h4 className='text-5xl font-extrabold text-[#2AB3FD] capitalize'>New premium quality shoes <span className='block text-white'>on Bird Fashion</span></h4>
                                <p className='text-white text-lg my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, qui? Minus mollitia sequi itaque quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, labore?</p>
                                <button className='my-btn'><Link to='/home'>See More</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full py-20 banner3 banner'>
                        <div className='w-4/5 mx-auto text-white'>
                            <div className='mx-10'>
                                <h4 className='text-5xl font-extrabold text-[#2AB3FD] capitalize'>high grade  Branded Products<span className='block text-white'>on Bird Fashion</span></h4>
                                <p className='text-white text-lg my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, qui? Minus mollitia sequi itaque quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, labore?</p>
                                <button className='my-btn'><Link to='/home'>See More</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full py-20 banner4 banner'>
                        <div className='w-4/5 mx-auto text-white'>
                            <div className='mx-10'>
                                <h4 className='text-5xl font-extrabold text-[#2AB3FD] capitalize'>All Premium quality jeans<span className='block text-white'>on Bird Fashion</span></h4>
                                <p className='text-white text-lg my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, qui? Minus mollitia sequi itaque quaerat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, labore?</p>
                                <button className='my-btn'><Link to='/'>See More</Link></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;