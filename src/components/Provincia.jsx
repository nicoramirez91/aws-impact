import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Provincia() {
    const [province, setProvince] = useState('');
    const [mapStyle, setMapStyle] = useState({
        background: `url('/images/.png')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      });
  
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

    useEffect(() => {
        if (province) {
          setMapStyle({
            background: `url('/images/${province}.png')`,
            backgroundSize: 'contain!important',
            backgroundRepeat: 'no-repeat!important',
            backgroundPosition: 'center!important'
          });
        }
      }, [province]);

      AOS.init();

  return (
    <>
    <div className="provincia" >
      <div className="grid">
            <div className="title"  data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                {province}

            </div>
            <div className="map" style={mapStyle}>

            </div>
            <div className="grid-item top1">
                <div className="box__container" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <div className="box box1">
                        Agilidad
                    </div>
                    <div className="box box2">
                        Eficiencia
                    </div>
                    <div className="box box3">
                        Chat bots
                    </div>
                    <div className="box box4">
                        Recuperación de desastres
                    </div>
                    <div className="box box5">
                        Centro de contacto omnicanal
                    </div>
                </div>
                <div className="box principal">
                    <img src="/images/ShieldCheckered.png" alt="" />
                    Cybersecurity
                </div>
            </div>
            <div className="grid-item top2">
                <div className="box__container" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <div className="box box1">
                        Modernización
                    </div>
                    <div className="box box2">
                        Inscrpciones ágiles
                    </div>
                    <div className="box box3">
                        Página web
                    </div>
                    <div className="box box4">
                        Aplicaciones
                    </div>
                </div>
                <div className="box principal">
                    <img src="/images/HardDrives.png" alt="" />
                    Datacenter
                </div>
            </div>
            <div className="grid-item bottom1">
                <div className="box__container" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <div className="box box1">
                        Seguridad
                    </div>
                    <div className="box box2">
                        Analíticos
                    </div>
                    <div className="box box3">
                        Machine learning
                    </div>
                    <div className="box box4">
                        Big data
                    </div>
                    <div className="box box5">
                        Data lake
                    </div>
                </div>
                <div className="box principal">
                    <img src="/images/ShareNetwork.png" alt="" />
                    Networking
                </div>
            </div>
            <div className="grid-item bottom2">
            <div className="box__container" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <div className="box box1">
                        Optimización
                    </div>
                    <div className="box box2">
                    Aulas
                    </div>
                    <div className="box box3">
                    Capacitaciones
                    </div>
                    <div className="box box4">
                    Cursos
                    </div>
                    <div className="box box5">
                        LMS
                    </div>
                </div>
                <div className="box principal">
                    <img src="/images/CloudArrowUp.png" alt="" />
                    Storage
                </div>
            </div>




      </div>    
    </div>
    
    </>
  )
}
