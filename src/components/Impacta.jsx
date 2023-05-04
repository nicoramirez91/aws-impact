import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Impacta() {
    AOS.init();
  return (
    <>
    <div className="impacta">
        <div className="impacta__container container">
            <div className="impacta__container--content">
                <div className="content--title">
                    <div className="impacta-text" >
                        Impacta
                    </div>
                    <div className="vida">
                        Vidas
                    </div>
                </div>
                <div className="linea1">
                    <img src="/images/linea1.png" alt="" />
                </div>
                <div className="linea2">
                    <img src="/images/linea2.png" alt="" />
                </div>
                <div className="linea2"></div>
                <img src="/images/impacta1.png" alt="Impacta Vidas"   />
                <img src="/images/impacta2.png" alt="Impacta Vidas"  />
                <img src="/images/impacta3.png" alt="Impacta Vidas"  />
                <img src="/images/impacta4.png" alt="Impacta Vidas"  />
            </div>
        </div>
    </div>

    <div className="transformar">
        <div className="transformar__container container">
            <div className="transformar__container--content">
                <div className="title">
                    <span>AWS Impact</span> existe para transformar, desarrollar y ayudarte en tu gestión.
                </div>
                <div className="sub-title">
                    Tu ciudad tiene partners que pueden ayudar, descubrilos.
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
