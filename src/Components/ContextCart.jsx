import React, { useContext } from "react";
import Items from "./Items";
import Navbar from "./Navbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./Cart";

const ContextCart = () => {
  // cosumer
  const { item, totalAmount, totalItems, clearCart } = useContext(CartContext);
  
    if (item.length === 0) {
      return (
        <>
          <Navbar />
          <section className="main-cart-section">
          <div className="col-12 mb-5 p-4">
                        <h1 className='display-6 fw-bolder text-center'>SHOPPING CART</h1>
                        <hr />
            




                    </div>
            <h3 className="total-items"style={{textAlign:"center"}} >
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </h3>      

<img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"style={{marginLeft:"420px"}} alt="" />
<h2 style={{textAlign:"center"}}>Cart is EMPTY!!!!!!!!!!!!!</h2>
            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  <h1>Empty Cart</h1>
                
                </Scrollbars>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
        <>
           <Navbar />
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p> 

            <div className="cart-items"> 
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  {item.map((curItem) => {
                    return <Items key={curItem.id} {...curItem} />;
                  })}
                </Scrollbars>
              </div>
            </div>
            <div className="card-total">
              <h3>
                card total: <span> {totalAmount}₹ </span>
              </h3>
              <button>CheckOut</button>
              <button onClick={clearCart}>Clear Cart</button>
            </div>
          </section>
        </>
      );
    }
  
};

export default ContextCart;
