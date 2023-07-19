import { BsPerson } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useState } from 'react'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false); // These are default boolean values set by us

  const handleNav = () => {
    setNav(!nav);
  }

  const handleLogo = () => {
    setLogo(!logo);
  }

  return (
    <div className='flex justify-between items-center h-20 absolute w-full z-10'>
      <div>
        <h1 onClick={handleLogo} className={logo ? 'hidden': 'block'  }>TravelJs.</h1>
      </div>

      <ul className='hidden md:flex font-semibold text-green-900'>
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>Booking</li>
      </ul>

      <div className='hidden md:flex px-5'>
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>

      {/* hamburger */}
      <div onClick={handleNav} className='md:hidden mx-2 z-10'>
        {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* mobile dropdown */}
      <div className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1 className='my-2'>TravelJs.</h1>
          <li className='border-b text-center text-l my-1'>Home</li>
          <li className='border-b text-center text-l my-1'>Destination</li>
          <li className='border-b text-center text-l my-1 '>Travel</li>
          <li className='border-b text-center text-l my-1'>Booking</li>
          <div className='flex space-x-4 justify-center my-2'>
            <button className='bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] px-4 py-2 rounded-full text-white'>Search</button>
            <button className='bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] px-4 py-2 rounded-full text-white'>Account</button>
          </div>
          <div className='flex space-x-2 justify-around my-5'>
            <FaFacebook size={30} className='icon text-green' />
            <FaInstagram size={30} className='icon mx-2' />
            <FaYoutube size={30} className='icon mx-2' />
            <FaTwitter size={30} className='icon' />
          </div>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
