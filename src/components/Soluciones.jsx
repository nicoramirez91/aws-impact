import { useEffect } from 'react';    
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Soluciones() {



  return (
    <>
    <div className="soluciones">
        <div className="soluciones__container container">
            <div className="soluciones__container--title">
                <span>Soluciones</span> donde estes:
            </div>
            <div className="soluciones__container-provincia">
                <i className="fa-solid fa-location-dot"></i> San Luis, Argentina
            </div>
            <div className="soluciones__container--content">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    speed={5000}
                    effect={'fade'}
                    autoplay={{
                    delay: 3000 ,
                    disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="solucion">
                            <div className="solucion__logo">
                                <img src="/images/Logo245x70 2.png" alt="Logo" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
