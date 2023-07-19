import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './styles.css';
import { EffectCoverflow } from 'swiper/modules';

//
// Import images
import img1 from '../assests/img1.jpg';
import img2 from '../assests/img2.jpg';
import img3 from '../assests/img3.jpg';
import img4 from '../assests/img4.jpg';
import img5 from '../assests/img5.jpg';
import img6 from '../assests/img6.jpg';
import img7 from '../assests/img7.jpg';
import img8 from '../assests/img8.jpg';

const Destination = () => {
    return (
        <div className='bg-blue-300/50 '>
            <div className='container mx-auto w-3/4 overflow-hidden'>
                <h1 className='text-center font-semibold pb-0'>All Exclusive Journey</h1>
                <p className='text-center mt-2 text-red-600 text-xl font-semibold zoom-in-out'>
                    Available here!
                </p>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow]}
                    className='mySwiper custom-swiper'
                    initialSlide={4}
                >
                    <SwiperSlide>
                        <img src={img1} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img8} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Destination
