import React from 'react';
import './Home.css';
import { data } from '../../assets/data';
import Card from '../Card/Card';
import Content from '../Content/Content';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplayspeed: 3000,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          infinite: true,
          autoplay: true,
        }
      },]
  };

  const smartphone = data.filter((item) => { return (item.category === "phone") });
  const mensFashion = data.filter((item) => { return (item.category === "mensFashion") });
  const laptops = data.filter((item) => { return (item.category === "laptops") });
  const sofa = data.filter((item) => { return (item.category === "sofa") });


  return (
    <>
      <div className='homeContainer'>
        <Slider {...settings}>
          <div>
            <img className='slide-banner' src='./images/banner1.webp' />
          </div>
          <div>
            <img className='slide-banner' src='./images/banner2.webp' />
          </div>

        </Slider>
        <Content>
          <div className='policyCard'>
            <div><i class="ri-truck-line ri-2x"></i><span>Fast Shipping</span></div>
            <div><i class="ri-secure-payment-line ri-2x"></i><span>Secure Payment</span></div>
            <div><i class="ri-loop-left-line ri-2x"></i><span>Easy Returns</span></div>
            <div><i class="ri-refund-2-line ri-2x"></i><span>Guarantee Refund</span></div>
          </div>
          <h2 className="new-title">New Arrivals</h2>
          <div className='newArrival'>
            <div class="newCard"><img className="new-image" src='/images/new1.jpg' /></div>
            <div class="newCard"><img className="new-image" src='/images/new2.jpg' /></div>
            <div class="newCard"><img className="new-image" src='/images/new3.png' /></div>
            <div class="newCard"><img className="new-image" src='/images/new4.jpg' /></div>
          </div>
          <div className='homeProduct'>
            <h2>Laptops</h2>
            <Card item={laptops.slice(0, 8)} />
          </div>
          <div className='homeProduct'>
            <h2>Smartphones</h2>
            <Card item={smartphone.slice(3, 7)} />
          </div>
          <div className='banner'>
            <div className='banner-content'>
              <h2>FIND THE BEST</h2>
              <div>FURNITURE</div>
              <h4>UP TO 50% OFF</h4>
            </div>
            <div><img className='banner-img' src='/images/other/sofa-img.png' /></div>
          </div>
          <div className='homeProduct'>
            <h2>Sofa</h2>
            <Card item={sofa.slice(0, 8)} />
          </div>
          <div className='homeProduct'>
            <h2>Men's Fashion</h2>
            <Card item={mensFashion.slice(3, 7)} />
          </div>
        </Content>
      </div>
    </>

  )
}
export default Home;
