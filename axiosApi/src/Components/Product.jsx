import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../App.css'


function Product() {

    const [loading, setLoading] = useState(false);

    const [data,setData] = useState([]);

    useEffect(()=> {

        setLoading(true);
         
        axios({
            method:"GET",
            url:"https://fakestoreapi.com/products"

        }).then(res=> { 
            console.log(res.data)
            setData(res.data)
    }).catch(e => console.log(e))
      .finally(() => setLoading(false))

    },[]);


  return (
    <div className='product-container'>
        {loading && (
            <div>
                {" "}
                <h1>Loading...</h1>
            </div>
        )}

        {
           data.map((product)=> (
            <div key={product.id} className='card'>
            <div><img src={product.image} alt="#" /></div>
            <div className='card-description'>
                <h6>{product.title}</h6>
                <h6>{`price: ${product.price}`}</h6>
                <h6>{`Category: ${product.category}`}</h6>
                <h6>{}</h6>
            </div>
            </div>
           ))
        }
    </div>
  )
}

export default Product