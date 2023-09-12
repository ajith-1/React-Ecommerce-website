import React from 'react';
import './FavoriteProduct.css';
import Content from '../Content/Content';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import {data} from '../../assets/data'; 

function FavoriteProduct() {

    const favItem = useSelector((state) => state.favoriteData.cards);
    const favorite = data.filter(product => favItem.includes(product.id));
      
    return (
        <div className='fav-container'>
            <Content>
                <h3>Your Wish List</h3>
                {favorite.length<=0 ? <div>You Wish List is Empty</div> : <Card item={favorite} />}
                
            </Content>

        </div>
    )
}

export default FavoriteProduct