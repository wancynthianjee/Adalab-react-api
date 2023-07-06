// import React,{useState} from "react";
// import './style.css'
// const Login = ()=>{
//   const [username, setUsername] = useState('')
//   console.log({username});
//   const [password, setPassword] = useState('')
//   console.log({password});
//  const handleSubmit = async(e)=>{
//       e.preventDefault();
//       const data = {
//         username: username,
//         password: password
//       }
//       try {
//         const response = await fetch('https://dummyjson.com/auth/login',{
//           method: 'POST',
//           headers:{
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//         });
//         const result = await response.json();
//         console.log({result});
//       } catch (error) {
//         console.log(error.message);
//       }
//  };
//   return(
//     <div>
//       <form className="form" onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <input placeholder="Enter username" type="text"
//          onChange={(e)=>{setUsername(e.target.value)}}
//         />
//         <br/>
//         <br/>
//         <input placeholder="Enter password" type="password"
//           onChange={(e)=>{setPassword(e.target.value)}}
//         />
//         <br/>
//         <br/>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   )
// }
// export default Login

import { wait } from "@testing-library/user-event/dist/utils";
import React, {useState, useEffect} from "react";
const Products =()=>{
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    (async()=>{
      await getProducts();
    })()
  },[])
console.log(products);
  const getProducts = async()=>{
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products')
      const result = await response.json();
      setProducts(result.products)
      setLoading(false);
    } catch (error) {
     console.log(error.message);
    }
  }
  if(loading){
    return <h2>loading...</h2>
  }
  return(
    <div>
      <h1>All Products</h1>
      {products.map((item) =>(
        <div key={item.id}>
        <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};
export default Products