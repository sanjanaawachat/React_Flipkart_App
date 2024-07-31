
// import React, { useState, useEffect } from 'react'
// import Skeleton from 'react-loading-skeleton';
// import { useParams } from 'react-router-dom';
// import {useDispatch} from 'react-redux';
// import {addCart} from '../redux/action';
// import Cart from './Cart';
// import { NavLink } from 'react-router-dom';

// const Product = () => {
   
//     const { id } = useParams();
//     const [product, setProduct] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const handleDecrement = (product) => {
//         setProduct((prevProduct) => ({
//           ...prevProduct,
//           qty: Math.max(prevProduct.qty - 1, 1)
//         }));
//       };
    
//       const handleIncrement = (product) => {
//         setProduct((prevProduct) => ({
//           ...prevProduct,
//           qty: prevProduct.qty + 1
//         }));
//       };
// const dispatch=useDispatch();
// const addProduct=(product)=>{
//     dispatch(addCart(product));
// }

//     useEffect(() => {
//         const getProduct = async () => {
//             // fetch(`https://fakestoreapi.com/products/${id}`);
//             // setProduct(await response.json());
//             // setLoading(false);
//             try {
//                 const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//                 const data = await response.json();
//                 setProduct(data);
//             } catch (error) {
//                 console.error("Error fetching the product:", error);
//             } finally {
//                 setLoading(false);
//             }
        
        
//         }
//         getProduct();
//     });

//     const Loading = () => {
//         return (<>
//       <div className="col-md-6">
//         <Skeleton height={400}/>
//       </div>
//       <div className="col-md-6" style={{lineHeight:2}}>
//         <Skeleton height={50} width={300}/>
//         <Skeleton height={75} />
//         <Skeleton height={25} width={150}/>
//         <Skeleton height={50}/>
//         <Skeleton height={150}/>
//         <Skeleton height={50} width={100}/>
//         <Skeleton height={50} width={100} style={{marginLeft:6}}/>
//         </div>
//         </>)
//     }
// const ShowProduct=()=>{
// return(
//     <>
//     <div className="col-md-6">
//         <img src={product.image} alt={product.title} height="400px" width="400px"/>
//     </div>

//     <div className="col-md-6">
//        <h4 className='text-uppercase text-black-50'>
//         {product.category}
//        </h4>

//        <h1 className='display-5'>{product.title}</h1>
//        <p className='lead fw-bolder'>Rating{product.rating && product.rating.rate}
//         <i className='fa fa-star'></i>
//        </p>
//        <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
//        <div className="lead">{product.description}</div>
//        <button className='btn btn-outline-dark' onClick={()=>addProduct(product)}>Add To Cart</button>
//        <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Go To Cart</NavLink>
//     </div>
//     <div>
   
//       <Cart product={product} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
//       <div>
     
//       {/* Repeat Cart component for other items as needed */}
//     </div>
//     </div>
//     </>
// )
// }

//     return (
//      <div>
//         <div className="container py-5">
//             <div className="row">
//                 {loading ? <Loading/> : <ShowProduct/>}
//             </div>
//         </div>
//      </div>
//     )
// }

// export default Product


import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams, NavLink } from 'react-router-dom';
// import Cart from './Cart';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  // const dispatch = useDispatch();

  const handleDecrement = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      qty: Math.max((prevProduct.qty || 1) - 1, 1)
    }));
  };

  const handleIncrement = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      qty: (prevProduct.qty || 1) + 1
    }));
  };

  // const addProduct = (product) => {
  //   dispatch(addCart(product));
  // };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct({ ...data, qty: 1 });
      } catch (error) {
        console.error("Error fetching the product:", error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt={product.title} height="400px" width="400px" />
        </div>

        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {product.category}
          </h4>

          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <div className="lead">{product.description}</div>
          <button className="btn btn-outline-dark">Add To Cart</button>
          <NavLink to="/Cart" className="btn btn-dark ms-2 px-3 py-2">Go To Cart</NavLink>
        </div>
        <div>
          {/* {product.qty && (
            <Cart product={product} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
          )} */}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default Product;
