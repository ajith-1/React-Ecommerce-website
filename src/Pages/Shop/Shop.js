import React, { useState, useEffect } from 'react';
import './Shop.css';
import { data } from '../../assets/data';
import Card from '../Card/Card';
import Content from '../Content/Content';


const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(" ");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(()=>{
    window.scroll(0,0);
  },[])

  const filteredItems = data.filter(
    (item) =>
      (selectedCategory === " " || item.category === selectedCategory)
  );

  const searchFilter = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleBtnClick = (event) => {
    if (searchQuery.length > 0) {
      setSearchQuery('')
    }
  }

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) {
      handleBtnClick();
    }
  }


  return (
    <div className='shop-container'>
      <div className='shop-banner'>
        <div className='shopBanner-content'>
          <h3>EXCLUSIVE COLLECTION</h3>
          <div>SMART WATCH</div>
          <h4>UP TO 10% OFF</h4>
        </div>
        <div><img src='/images/apple-watch-ultra.png' width={300} height={300} /></div>
      </div>
      <Content>
        <div className='shop-header'>
          <div className='category'>
            <span>Select Category: </span>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value=" " selected >All Category</option>
              <option value="phone">Mobiles</option>
              <option value="sofa">Furniture</option>
              <option value="laptops">Laptops</option>
              <option value="mensFashion">Men's Fashion</option>
              <option value="womensFashion">Women's Fashion</option>
              <option value="smartwatches">Smart Watch</option>
              <option value="tablets">Tablets</option>
              <option value="headphones">Headphones</option>
            </select>
          </div>
          <div className="shop-search">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Example : Sofa "
              className='search-input'
              onKeyUp={searchQueryHandler}
            />
            <button className="search-icon" type='submit' onClick={"handleBtnClick"}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        {searchQuery.length <= 0 ? <Card item={filteredItems} /> : <>{searchQuery.length >= 0 && searchFilter.length === 0 ? <p>No result found</p> : <Card item={searchFilter} />}</>}
      </Content>
    </div>
  )
}
export default Shop;
