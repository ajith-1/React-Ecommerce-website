import React from 'react';
import {HiOutlineHeart,HiHeart} from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite} from '../../Redux/FavSlice';


function Favorite({item}) {
    const favItem = useSelector((state) => state.favoriteData.cards);
 const dispatch = useDispatch();

  const isFavorite = favItem.includes(item.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(item.id));
  };
  return (
    <span onClick={handleToggleFavorite}>
             {isFavorite ? (
          <HiHeart className='fav-icon' style={{ color: 'red' }} />
        ) : (
          <HiOutlineHeart className='fav-icon' />
        )}
          </span> 
  )
}

export default Favorite