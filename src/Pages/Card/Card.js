import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import Favorite from '../Favorite/Favorite';


function Card({item}) {

  return (
    <>
      <div className='productCard'>
        {item.map((items) => {
          return (
            <div className='cards' key={items.id}>
              <Link className='list' to={`/ProductDetials/${items.category}/${items.id}`} >
                <img className='cardImage' src={items.image} alt='Product Image' />
              </Link>
              <Favorite className='fav-icon' item={items}/>
              <p className='title'>{items.name}</p>
              <p className='price'>&#8377; <NumericFormat thousandSeparator={true} displayType={'text'} value={Math.round(items.price * 80)}/></p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Card;