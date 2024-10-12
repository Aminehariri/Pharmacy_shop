import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation, Autoplay ,EffectFade } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import prod1 from '../../assets/prodbg.png'
import prod2 from '../../assets/prodbg2.png'

// Import Swiper styles
import 'swiper/css';
import banner1 from '../../assets/banners/banner1.jpg';
import banner2 from '../../assets/banners/banner2.jpg';
import banner3 from '../../assets/banners/banner3.jpg';
import { Link } from 'react-router-dom';



// Define the Home component
export default function Banner(props) {
    
  // pageName=props.pageName
  return (
    
   
   
   
    
    <div className={`banner banner-${props.pagename}`} pagename={props.pagename}>
      { props.pagename==='home' && 
      <Swiper  
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        slidesPerView={1} // Show one slide per view
        modules={[Pagination, Navigation, Autoplay , EffectFade]}
        className="mySwiper"
    
        
        >
        <SwiperSlide>
          <div className="banner-img">
             <img src={banner1} alt="Banner 1" />
             </div>
          <div className="slide-text">
            <p className='slogan'>Your Trusted Pharmacy Partner</p>
            <p className='sub-slogan'>Providing Care and Expertise You Can Rely On Every Day.</p>
            <div className="cta">
            <Link to='/products'>View products</Link>
            <Link to='/contact'>Contact us</Link>
            </div>
          <span className='prod-bg'></span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide1'>
          <div className="banner-img">
          <img src={banner2} alt="Banner 2" />
          </div>
          <div className="slide-text">
            <p className='slogan'>Quality Products for Your Health</p>
            <p className='sub-slogan'>Discover Our Wide Range of Medications, Supplements</p>
            <div className="cta">
            <Link to='/products'>View products</Link>
            <Link to='/contact'>Contact us</Link>
            </div>
          <span className='prod-bg'></span>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide2'>
          <div className="banner-img">
          <img src={banner3} alt="Banner 3" />
          </div>
          <div className="slide-text">
            <p  className='slogan'>Summer Savings on Health Products</p>
            <p className='sub-slogan'>Enjoy Hot Discounts and Cool Deals on Your Favorite Brands</p>
            <div className="cta">
            <Link to='/products'>View products</Link>
            <Link to='/contact'>Contact us</Link>
            </div>
          <span className='prod-bg'></span>
          </div>
        </SwiperSlide>
      </Swiper>

  } 
  { props.pageName!=='home' &&
    <div className='banner-intern'>
      <div className="banner-img">
          <img src={banner3} alt="Banner 3" />
          </div>
          <div className="slide-text">
            <p  className='slogan'>{props.pageName}</p>
            <div className="cta">
              <Link to='/products'>View products</Link>
              <Link to='/contact'>Contact us</Link>
            </div>
          </div>
    </div>
  }
    </div>
  );
}
