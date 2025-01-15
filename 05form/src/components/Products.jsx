import React, { useState } from 'react'
import Navbar from './Navbar'
import Addproduct from './Addproduct'

function Products() {

    const [showModal, setShowModel] = useState(false)


  return (
    <>
  <div className='p-10 flex flex-col h-screen'>
            <div className='w-full  bg-[#222] rounded-xl shadow-md py-8 px-8'>
    <div className='flex flex-col sm:flex-row justify-between items-center'>
        <h2 className='text-white text-2xl font-bold mb-4 sm:mb-0'>Manage Product</h2>
            <button onClick={() => setShowModel(true)} className='text-white px-4 py-2 
                               rounded-2xl bg-blue-500
                                hover:bg-blue-800'>Add Product
            </button>
            {showModal && <Addproduct onClose={() => setShowModel(false)}/>}
        </div>
    </div>
  </div>
  </>
  )
}

export default Products

