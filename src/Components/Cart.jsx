// import React from 'react';

// function Cart({ product, handleDecrement, handleIncrement }) {
//   return (
//     <>
//       <div className="row">
//         <div className="col-md-4">
//           <img src={product.image} alt={product.title} style={{ height: "200px", width: "180px" }} />
//         </div>

//         <div className="col-md-4">
//           <h3>{product.title}</h3>
//           <p className="lead fw-bold">
//             {product.qty} x ${product.price} = ${product.qty * product.price}
//           </p>
//           <button className="btn btn-outline-dark me-4" onClick={() => handleDecrement(product)}>
//             <i className="fa fa-minus"></i>
//           </button>

//           <button className="btn btn-outline-dark me-4" onClick={() => handleIncrement(product)}>
//             <i className="fa fa-plus"></i>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cart;
import React, { createContext, useContext, useReducer } from "react";
// import "./cart.css";
import products from './Products';
import ContextCart from "./ContextCart";
import reducer from "./reducer";

// create a context
export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 25600,
  totalItems: 0,
  quantity: 1,
};

const Cart = () => {
  // inPlace of useState we will use the useReducer Hook
  // const [item, setItem] = useState(products);

  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  return (
    <>
      <CartContext.Provider
        value={{ ...state, clearCart, removeItem, increment, decrement }}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

// custom Hook
export const useGlobalContext = () => {
  return useContext(CartContext);
};

export default Cart;
