import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Header() {
    AOS.init();
  return (
    <>
    <section className="header">
        <div className="header__container container">
            <div className="header__container--nav row">
                <div className="nav__logo col-md-6" >
                    <img src="/images/logo-aws.png" alt="Logo AWS" />
                </div>
                <div className="nav__menu col-md-6">
                    <a href="#">Public Sector</a>
                    <a href="#">Partners</a>
                    <a href="#">Contacto</a>
                    <a href="#">Agendar llamada</a>
                </div>
            </div>
            <div className="header__container--hero row">
                <div className="hero__container">
                    <div className="flecha" >
                        <img src="/images/Vector 40.png" alt=""  data-aos="zoom-in" data-aos-delay="500"/>
                    </div>
                    <div className="hero__container--title" >
                        <h2>Transforma la vida en tu ciudad</h2>
                        <p>Llega a más personas con múltiples tecnologías</p>
                    </div>
                    <div className="hero__container--img">
                        <img src="/images/edificios.png" alt="Edificios" data-aos="zoom-out-up" data-aos-delay="1000" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <div className="btn__contacto">
        <img src="/images/Phone.png" alt="" />
    </div>
    </>
  )
}
