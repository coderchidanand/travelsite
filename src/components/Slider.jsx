
import 'swiper/css';
import 'swiper/css/navigation';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import './styll.css';

// import required modules
import { Navigation } from 'swiper/modules';

import img1 from '../assests/img1.jpg';
import img2 from '../assests/img2.jpg';
import img3 from '../assests/img3.jpg';
import img4 from '../assests/img4.jpg';
import img5 from '../assests/img5.jpg';


const Slider = () => {
    return (
        <div className='bg-blue-300/50'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper absolute">
                <SwiperSlide>
                    <img src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider
