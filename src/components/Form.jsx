import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jfml2hx', 'template_ib7jc0b', form.current, 'GjX_mMxZwaRVLT8A2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="form" ref={form} onSubmit={sendEmail}>
            <section className="section">
                <label className="form__label">Nombre</label>
                <input className="form__input" type="text" name="from_name" />
            </section>
            <section className="section">
                <label className="form__label">Correo electrónico</label>
                <input className="form__input" type="email" name="from_email" id="from_email" />
            </section>
            <section className="section">
                <label className="form__label" >Mensaje</label>
                <textarea className="form__text-area" name="message" />
            </section>
            <input className="form__button" type="submit" value="Enviar" />
        </form>
    );
};