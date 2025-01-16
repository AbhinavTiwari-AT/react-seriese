import React,{ useState } from 'react'
import LogoutModal from './LogoutModal';

function Navbar() {

    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const [isCategoryOpen,setIsCategoryOpen] = useState(false);

    const [showLogoutModal, setShowLogoutModal] = useState(false);




    const toggleMenu = () => {

        setIsMenuOpen(!isMenuOpen) // !false = true

    }
    // console.log(isMenuOpen)

    const handleCategoryMouseEnter = () => {
      setIsCategoryOpen(true);
  };

  const handleCategoryMouseLeave = () => {
      setIsCategoryOpen(false);
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };


  return (
    <>
    <nav className= 'bg-blue-500 p-4'>

        <div className='flex items-center justify-between'>
            {/* logo */}
           <div className='text-white text-2xl font-bold'>React</div>
           {/* <div className='flex items-center'>
                        <button className='text-white px-4 py-2'>Login</button>
                    </div>
            */}
          <div className='md:hidden'>
            <button className='text-white' onClick={toggleMenu}>
                <svg 
                fill='none'
                stroke='currentColor'
                strokeLinecap = 'round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                className='w-6 h-6'
                >
                 <path d="M4 6h16M4 12h16M4 18h16"></path> 
                </svg>
            </button>
          </div>

           <ul className='hidden md:flex space-x-10 mx-10'>
            <li><a href="#" className='text-white'>Home</a></li>
            <li><a href="#" className='text-white'>About</a></li>
            <li><a href="/Products" className='text-white'>Products</a></li>
            <li><a href="/order" className='text-white'>Order</a></li>


            <li className='relative' onMouseEnter={handleCategoryMouseEnter}  onMouseLeave={handleCategoryMouseLeave}>
              <a href="#" className='text-white'>Categories</a>

              {isCategoryOpen && (
                                <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md">
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <a href="#">Mens</a>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <a href="#">Womens</a>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-200">
                                        <a href="#">Kids</a>
                                    </li>
                                   </ul>
              )}

            </li>
            <li className='text-white' onClick={handleLogoutClick}> Logout</li> 
           </ul>
        </div>

        {/* mobile menu */}
        {isMenuOpen ? (<ul className='flex-col md:hidden '>
            <li className='py-2'><a href="#" className='text-white'>Home</a></li>
            <li className='py-2'><a href="#" className='text-white'>About</a></li>
            <li className='py-2'><a href="/Products" className='text-white'>Products</a></li>
            <li className='py-2'><a href="/order" className='text-white'>Order</a></li>

            <li className='py-2 relative' onMouseEnter={handleCategoryMouseEnter} onMouseLeave={handleCategoryMouseLeave}>

              <a href="#" className='text-white'>Categories</a>
              
              {isCategoryOpen && (
                 <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md">
                 <li className="px-4 py-2 hover:bg-gray-200">
                     <a href="#">Mens</a>
                 </li>
                 <li className="px-4 py-2 hover:bg-gray-200">
                     <a href="#">Womens</a>
                 </li>
                 <li className="px-4 py-2 hover:bg-gray-200">
                     <a href="#">Kids</a>
                 </li>
                </ul>
              )}
            
            </li>


            <li className='py-2 text-white' onClick={handleLogoutClick} >Logout</li>
           </ul>) : null} 
      </nav>
      {showLogoutModal && <LogoutModal onClose={() => setShowLogoutModal(false)} />}
    </>
  )
}

export default Navbar