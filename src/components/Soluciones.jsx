import { useEffect, useState } from 'react';    
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Soluciones() {
    const [province, setProvince] = useState('');

  
    useEffect(() => {
      // Obtener la posición actual del usuario
      navigator.geolocation.getCurrentPosition(success, error);
  
      function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        // Utilizar la API de OpenStreetMap para obtener la dirección actual
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
          .then(response => response.json())
          .then(data => {
            const province = data.address.state;
            setProvince(province);

          })
          .catch(error => console.error(error));
      }
  
      function error(error) {
        console.error(error);
      }
    }, []);


  return (
    <>
    <div className="soluciones">
        <div className="soluciones__container container">
            <div className="soluciones__container--title">
                <span>Soluciones</span> donde estes:
            </div>
            <div className="soluciones__container-provincia">
                <i className="fa-solid fa-location-dot"></i> {province}, Argentina
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
