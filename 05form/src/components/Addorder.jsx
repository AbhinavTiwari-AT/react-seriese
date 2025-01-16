import React,{useState,useRef} from 'react'
import { X } from 'lucide-react';


function Addorder({onClose}) {
      
     const modalRef = useRef();
    
        const closeModal = (e) => {
            if(modalRef.current === e.target){
                onClose();
            }
        }
    
    
        const productdata ={productname:"",price:"",image:""};
          const[inputData,setInputData] =useState(productdata);
        
          function handleData(e){
              
            setInputData({...inputData,[e.target.name]:e.target.value})
          }
        
          function handleSubmit(e){
            e.preventDefault();
            if(!inputData.productname || !inputData.price || !inputData.image)
            {
              alert("All fields are Mandatory")
            }
            else{
              console.log("Form Submitted:", inputData); 
    
              setInputData(productdata);
            }
          }  
         
        


  return (
    <>
     <div ref={modalRef}  className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
           
           <div className='w-full max-w-md bg-[#222] rounded-xl shadow-md py-4 px-8'>
             {/* <div className='w-full max-w-md bg-blue-700 rounded-xl shadow-md px-8 mb-4'>
           
           <div className=' flex flex-col text-white'>
           <button onClick={onClose} className='text-right'><X size={30}/> </button>         

               <h2 className='text-[28px] text-left text- font-bold text-white'>Add Product </h2>
              </div>
              </div> */}

     <div className="w-full bg-blue-500 rounded-xl shadow-md px-8 py-2 mb-4">
     <div className="flex justify-between items-center text-white">
       <h2 className="text-[28px] font-bold">Add Order</h2>
       {/* Close Button on the Left */}
       <button onClick={onClose}>
         <X size={30} />
       </button>
     </div>
   </div>



               <form className='flex flex-col'  onSubmit={handleSubmit} > 
                   <input placeholder='Product Name' name='productname' onChange={handleData} value={inputData.productname}
                       className='bg-gray-700 text-white border-0 rounded-md p-2 mb-4
                       focus:bg-gray-600 focus:outline-none 
                         transition ease-in-out duration-150
                       placeholder-gray-300'
                   type="text" />
                    
                   <input placeholder='Price' name='price' onChange={handleData} value={inputData.price}
                       className='bg-gray-700 text-white border-0 rounded-md p-2 mb-4
                       focus:bg-gray-600 focus:outline-none 
                         transition ease-in-out duration-150
                       placeholder-gray-300'
                   type="text" />
                    <input placeholder='upload Image' name='image' onChange={handleData} value={inputData.image}
                       className='bg-gray-700 text-white border-0 rounded-md p-2 mb-4
                       focus:bg-gray-600 focus:outline-none 
                         transition ease-in-out duration-150
                       placeholder-gray-300'
                   type="file" />

                   <button className='bg-gradient-to-r from-indigo-500 to-blue-500 text-white 
                                      font-medium py-2 px-4 rounded-md hover:bg-indigo-900 hover:to-blue-900 
                                     transition ease-in duration-200'>Submit</button>
                   
               </form>
           </div>
       </div>
    </>
  )
}

export default Addorder