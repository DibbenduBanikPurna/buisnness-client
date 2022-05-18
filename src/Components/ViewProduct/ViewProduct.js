import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';

import ViewProducts from './ViewProducts';

const ViewProduct = () =>{
    const [products,setproducts]=useState([])
   // const history=useHistory()
   const navigate =useNavigate();


    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])

    const deleteProduct=(id)=>{
        fetch(`http://localhost:5000/product/${id}`,{
            method:"delete"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const remainData=products.filter((pd=>pd.id!==id))
            setproducts(remainData);
        });
    }

    const updateProduct=(id)=>{
      navigate(`/editproduct/${id}`)
      
    } 
    return (
       <>
 <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>

        </thead>
        <tbody>
          {
            products.map((product)=>{
                return <ViewProducts updateProduct={updateProduct} deleteProduct={deleteProduct} key={product._id} product={product}/>
            })
          }

        </tbody>
      </table>
       </>
    );
};

export default ViewProduct;