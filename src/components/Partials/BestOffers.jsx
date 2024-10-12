import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { useContext } from 'react';
import { AppContext } from '../ContextData';

export default function BestOffers() {
    const {bestOffer} = useContext(AppContext);
    console.log('bestOffer', bestOffer);

    return (
        <div className="best-offers">
            <h2 className="main-title">Best offers</h2>
            
            <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={2} // Show two slides per view
                modules={[Pagination, Autoplay, EffectFade]}
                className="mySwiper"
            >   
                {
                    Array.isArray(bestOffer) ? (
                        bestOffer.map((offer) => (
                            <SwiperSlide key={offer.id}>
                                <h2>{offer.text}</h2>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p>No offers available</p>
                    )
                }
            </Swiper>
        </div>
    );
}
