import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import {useSelector } from 'react-redux';
import Content from '../../Pages/Content/Content';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeTab,setActivetab] = useState('home');

  const cartItem=useSelector((state)=>state.cartData.cart);
  const favItem=useSelector((state)=>state.favoriteData.cards);


  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const click = (tab) => {
    setMenuOpen(false);
    setActivetab(tab);
  }

  return (
    <>
      <nav className="navbar">
        <Content>
        <div className="navbar-container">
          <div className="navbar-logo"><img src={logo} alt='Logo' /><div className='title'>Shop Cart</div>
          </div>
          <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to={'/'} className={`list ${activeTab === 'home' ? 'active' : ''}`} onClick={()=>click('home')}><span>Home</span></Link></li>
              <li><Link to={'/shop'} className={`list ${activeTab === 'shop' ? 'active' : ''}`} onClick={()=>click('shop')}><span>Shop</span></Link></li>
              <li><Link to={'/about'} className={`list ${activeTab === 'about' ? 'active' : ''}`} onClick={()=>click('about')}><span>About</span></Link></li>
              <li><Link to={'/favorite'} className={`list ${activeTab === 'favorite' ? 'active' : ''}`} onClick={()=>click('favorite')}><span>Favorite{favItem.length>0?<i class="ri-circle-fill ri-xxs"></i>:""}</span></Link></li>
            </ul>
          </div> 
          <div>
            <ul>
            <li>
              <Link to={'/login'} className='list'>
              <span id='loginBtn'>Login <i class="ri-login-box-line"></i></span>
              </Link>
              </li>
            <li>
              <Link to={'/cart'} className='list navbarCart'><i class="ri-shopping-bag-fill ri-lg"></i><span className='count'>{cartItem.length}</span>
              </Link>
              </li>
              <li>
              <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
              </li>
            </ul>
            </div>
          
        </div>
        </Content>
      </nav>
    </>
  )
}

export default Navbar;