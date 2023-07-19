import React from 'react';
import reactvd from '../assests/reactvd.mp4';
import { AiOutlineSearch } from 'react-icons/ai';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import './styles.css';
// import { EffectCoverflow } from 'swiper/modules';



const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover' src={reactvd} autoPlay loop muted />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/25'></div>
      <div className='top-0 w-full h-full flex flex-col text-white text-center absolute justify-center'>
        <h1>Welcome to</h1>
        <h2>Explore Top 1% of the World</h2>
        <form className='bg-gray-100/30 mt-2 max-w-lg w-full border rounded-md mx-auto flex items-center justify-center'>
          <input
            type='text'
            className='mx-auto p-1 text-center flex bg-transparent w-full focus:outline-none placeholder-black static'
            placeholder='Search Destination'
          />
          <button className='icon p-2 rounded-md m-1' style={{ color: '#ffffff' }}>
            <AiOutlineSearch />
          </button>
        </form>
      </div>

    </div>
  );
};

export default Hero;
