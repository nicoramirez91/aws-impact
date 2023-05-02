import React from 'react'

export default function Contacto() {
  return (
    <>
    <div className="contacto">
        <div className="contacto__container container">
            <div className="contacto__container--text">
                <p>Una vida es <span>un futuro creado</span>, tu ciudad puede convertirse en una <span>ciudad inteligente</span>.</p>
                <h3>Empezá ahora.</h3>
                <button><i className="fa-solid fa-phone"></i> Agendar llamada</button>
            </div>
            <div className="contacto__container--form">
                <form action="#">
                    <div className="icono">
                        <i className="fa-regular fa-envelope"></i>

                    </div>
                    <div className="form__title">
                        Hablemos
                    </div>
                    <div className="form__content">
                        <div className="form__input">
                            <label htmlFor="nombre">
                                NOMBRE COMPLETO
                                <input type="text" name="" id="" />
                            </label>

                        </div>
                        <div className="form__input">
                            <label htmlFor="email">
                                EMAIL
                                <input type="email" name="email" id="email" />
                            </label>
                            <label htmlFor="telefono">
                                TELÉFONO
                                <input type="tel" name="telefono" id="telefono" />
                            </label>

                        </div>
                        <div className="form__input">
                            <label htmlFor="info">
                                INFORMACIÓN ADICIONAL
                                <textarea name="info" id="info"></textarea>
                            </label>
                        </div>
                        <div className="form__input">
                            <input type="submit" value="Enviar" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    </>
  )
}
