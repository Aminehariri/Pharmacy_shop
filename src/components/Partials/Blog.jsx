import { useContext } from 'react'
import { AppContext } from '../ContextData';
import BlogCard from './BlogCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay ,EffectFade } from 'swiper/modules';

export default function Blog(){

    const {blogs} =useContext(AppContext)
    // console.log(blogs);
    
    return(
        <div className="blogs">
            <h2 className="main-title">Stay Informed with Our Expert Advice
                <span className="sub-title">Explore the latest tips</span>
            </h2>
            {
                <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={4} // Show one slide per view
                modules={[Pagination, Navigation, Autoplay , EffectFade]}
                className="mySwiper"
                > 
                 {
                    blogs.map((blog,id)=>
                        <SwiperSlide  key={id}>
                              <BlogCard id={blog.id} img={blog.img} key={id} title={blog.title} date={blog.date}></BlogCard>
                        </SwiperSlide>
                    )}
                    {/* <div className="swiper-navigation">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div> */}
                </Swiper>
                
            }
            
        </div>
    )
}