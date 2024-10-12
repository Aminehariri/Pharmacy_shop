import { AppContext } from "../ContextData"
import { useContext } from "react"
import ServiceCard from "./ServiceCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay ,EffectFade } from 'swiper/modules';



export default function ServiceAcc(){
    const {services} =useContext(AppContext)
    return(
        <div className="serviceAcc">
            <h2 className="main-title">Pharmacy Services 
                <span className="sub-title">Care for your health needs</span>
            </h2>
            {
                <Swiper
                navigation={false}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={3} // Show one slide per view
                modules={[Pagination, Navigation, Autoplay , EffectFade]}
                className="mySwiper"
                >   
                {services.map((service)=>
                    <SwiperSlide >
                        <ServiceCard service={service}></ServiceCard>
                    </SwiperSlide>
                )}
                
            </Swiper>  
            }
            
        </div>
    )
}
