import React from 'react'
import { X } from 'lucide-react';

function LogoutModal({onClose}) {


  return (
    <>
    
    <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
           
    <div className='w-full max-w-md bg-[#222] rounded-xl shadow-md py-4 px-8'>
     <div className="w-full bg-blue-500 rounded-xl shadow-md px-8 py-2 mb-4">
     <div className="flex justify-between items-center text-white">
       <h2 className="text-[28px] font-bold">Do You Want to logout !</h2>
       {/* Close Button on the Left */}
       <button onClick={onClose} >
         <X size={30} />
       </button>
     </div>
   </div >
   <div className='text-center py-2'>
            <button className='bg-gradient-to-r from-indigo-500 to-blue-500 text-white 
                               font-medium py-2 px-4  rounded-md hover:bg-indigo-900 hover:to-blue-900 
                               transition ease-in duration-200'>yes</button>
            <button className='bg-gradient-to-r from-indigo-500 to-blue-500 text-white 
                               font-medium py-2 px-4 rounded-md hover:bg-indigo-900 hover:to-blue-900 
                               transition ease-in duration-200 ml-4'>No</button>
             </div>      
           </div>
       </div>
       </>
  )
}

export default LogoutModal