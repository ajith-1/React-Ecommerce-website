import React, { useEffect, useState } from 'react';
import './Cart.css';
import Content from '../Content/Content';
import { useSelector, useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { removeCart, incrementItem, decrementItem } from '../../Redux/Slice';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
  const [total,setTotal]=useState('');
  const [name,setName]=useState({});
  const cartItem = useSelector((state) => state.cartData.cart);
  const dispatch = useDispatch();
  const message = () => toast.success(`Product removed from your cart`,{
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  const handleRemoveProduct = (itemId) => {
    message();
    dispatch(removeCart(itemId));
  };

  const handleIncrementProduct = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrementProduct = (itemId) => {
    dispatch(decrementItem(itemId));
  };

 useEffect(()=>{
  let subTotal=0;
  cartItem.map((item)=>{
    subTotal+= item.price*80*item.quantity; 
    return subTotal;
  })
  setTotal(subTotal);
 },[cartItem])


  return (
    <div className="cart-container">
      <Content>
      
      {cartItem.length>0?<>
        <h2>Shopping Cart</h2>
        <div className="cart-items">
        {cartItem.map((item) => {
          const price = item.price - (item.price * item.discount / 100);
          return (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-details">
                <h4>{item.name}</h4>
                <p>Price: &#8377; <NumericFormat thousandSeparator={true} displayType={'text'} value={Math.round(price * 80)} /></p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrementProduct(item.id)}><i class="ri-subtract-fill"></i></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrementProduct(item.id)}><i class="ri-add-fill"></i></button>
                </div>
                <p className='price'>Total Price: &#8377; <NumericFormat thousandSeparator={true} displayType={'text'} value={Math.round(item.quantity * price * 80)} /></p>
              </div>
              <button className='removeBtn' onClick={() => handleRemoveProduct(item.id)}><i class="ri-delete-bin-5-line"></i> Remove</button>
                <ToastContainer />
            </div>
          );
        })}
      </div>

      <div className="cart-summary">
        <h2>Total: &#8377; <NumericFormat thousandSeparator={true} displayType={'text'} value={Math.round(total)} /></h2>
        <h3>Total Items: {cartItem.length}</h3>
        <p>Shipping Charges: Free Shipping</p>
        <div className='cartSummary-btn'>
        <div><Link className='shopbtn' to={"/shop"}>Continue Shopping</Link></div>
        <div ><Link className='shopbtn' to={'/checkout'}>Check Out</Link></div>
        </div>
      </div></>:<div className='emptyCart'><img src='/images/empty-cart.webp'/><div><Link className='shopbtn' to={"/shop"}>Continue Shopping</Link></div></div>}
      
      </Content>
    </div>
  );
};


export default Cart;
