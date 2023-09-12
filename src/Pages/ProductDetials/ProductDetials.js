import React, { useState, useEffect } from 'react';
import './ProductDetials.css';
import { useParams } from "react-router-dom";
import { data } from '../../assets/data';
import Content from '../Content/Content';
import Card from '../Card/Card';
import { NumericFormat } from 'react-number-format';
import StarRating from '../StarRating/StarRating';
import { useDispatch } from 'react-redux';
import { addCart } from '../../Redux/Slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const ProductDetials = () => {
  const [product, setProduct] = useState({});
  const { category, id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const products = data.find((item) => { return (item.id == id) });
    setProduct(products);
    window.scroll(0, 0);
  }, [id])

  const price = product.price - (product.price * product.discount / 100);
  const related = data.filter((item) => { return (item.category === category) });
  const notify = () => toast.success(`${product.name} added to your cart`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const addToCart = () => {
    dispatch(addCart(product));
    notify();
  }

  return (

    <div className='container'>
      <Content>
        <div className='content-box'>
          <div className='left'>
            <img className='productImage' src={product.image} alt='image' />
          </div>
          <div className='right'>
            <h1>{product.name}</h1>
            <div className='product-price'>
              <span className='price discount'>{product.discount} % off</span>
              <span className='price originalPrice'>&#8377; <NumericFormat thousandSeparator={true} displayType={'text'} value={Math.round(product.price * 80)} /></span>
              <span className='price'>&#8377; <NumericFormat thousandSeparator={true} displayType={'text'} value={Math.round(price * 80)} /></span>
            </div>
            <StarRating value={product.rating} /><span className='rating'>{product.rating} rating</span>
            <div className='span'>
              <span style={{ fontWeight: 'bold' }}>Category: </span> <span> {product.categoryName}</span>
            </div>
            <button className='add-btn' onClick={addToCart}><i class="ri-shopping-cart-2-line"></i>Add to Cart</button>
            <ToastContainer />
          </div>
        </div>
        <h3>Description</h3>
        <p className='description'>{product.description}</p>
        <h3>{product.specification ? "Specification" : "Material"}</h3>
        <div>{product.specification ?
          <div>
            <ul className='specs'>
              {Object.values(product.specification).map((e, i) => { return (<li key={i}>{e}</li>) })}
            </ul>
          </div> : product.material}</div>
        <h4>You might also like</h4>
        <div className='related'>
          <Card item={related} />
        </div>
      </Content>
    </div>


  )
}
export default ProductDetials;
