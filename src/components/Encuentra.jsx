import React from 'react'

export default function Encuentra() {
  return (
    <>
    <div className="encuentra">
        <div className="encuentra__container container">
            <div className="encuentra__container--title">
                <span>Encuentra</span> soluciones por sector:
            </div>
            <div className="encuentra__container--content">
                <select name="encuentra" id="encuentra">
                    <option value="sustentabilidad">Sustentabilidad</option>
                    <option value="sustentabilidad">Recaudación</option>
                    <option value="sustentabilidad">Ciudadanos</option>
                </select>
            </div>
            <div className="encuentra__container--partners">
                <div className="partner">
                    <img src="/images/Smartmation04.png" alt="Smartmation" />
                </div>
                <div className="partner">
                    <img src="/images/grupo tx 2.png" alt="grupo tx 2" />
                </div>
                <div className="partner">
                    <img src="/images/Logo meetcard.png" alt="Logo meetcard" />
                </div>
            </div>
        </div>

        <div className="divisor">
            
        </div>
    </div>
    
    </>
  )
}
