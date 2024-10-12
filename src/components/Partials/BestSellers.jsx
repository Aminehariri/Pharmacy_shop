import { AppContext } from '../ContextData';
import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from './Product';


import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay ,EffectFade } from 'swiper/modules';



export default function BestSelleres(){
    const { products } = useContext(AppContext);
    return(
        <div className="best-sellers">
            <h2 className="main-title">Our Best Sellers <span className="sub-title">Discover the products our customers love the most</span></h2>
            {
                    
                    <Swiper
                        // navigation={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={4} // Show one slide per view
                        modules={[Pagination, Navigation, Autoplay , EffectFade]}
                        className="mySwiper"
                        >
                        {products.filter(prod =>prod.bestSeller)
                        .map((prod)=>
                            <SwiperSlide key={prod.id}>
                                <Product key={prod.id} prod={prod}></Product>
                            </SwiperSlide>
                        )}


                        
                    <div className="swiper-navigation">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    </Swiper>

               
            } 

        </div>
    )
}