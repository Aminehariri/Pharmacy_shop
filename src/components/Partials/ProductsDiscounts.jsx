import { AppContext } from '../ContextData';
import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay ,EffectFade } from 'swiper/modules';
import Product from './Product';


export default function BestSelleres(){
    const { products } = useContext(AppContext);
    return(
        <div className="Product-discount">
            <h2 className="main-title">Special Offers <span className="sub-title">Limited-time discounts</span></h2>
            {
                <Swiper
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={5} // Show one slide per view
                    modules={[Pagination, Navigation, Autoplay , EffectFade]}
                    className="mySwiper"
                    >   
                    {products.filter(prod =>prod.discount)
                    .map((prod)=>
                        <SwiperSlide >
                            <Product prod={prod}></Product>
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


 {/* {
                            products.filter( prod=> prod.discount)
                            .map((prod) => (
                                    { <div className="product-item">
                                        <div className="prod-btns">
                                            <div className="p-btn"><LuEye /></div>
                                            <div className="p-btn"><FaRegHeart /></div>
                                            <div className="p-btn"><SlHandbag /></div>
                                        </div>
                                        <div className="discount-num">
                                            <span className='discount-value'>-{prod.price- prod.discount *100 /100}%</span>
                                        </div>
                                        <a href="#">
                                        <img src={prod.image} alt={prod.name} />
                                        </a>
                                        <div className="product-info">
                                            <h3>{prod.name}</h3>
                                            <p className='discount-price'><span className="old-price">{prod.price}$ </span><span className="discount"> - {prod.discount}$</span></p>
                                        </div>
                                    </div> }
                                    
                                ))
                            } */}