import React from 'react';
import "./Contact.css";
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className='contact--content-white'>
      <h2>Miroslav Smička</h2>

      <div className='two-columns'>
        <div>
          <p>
            Jos. Vodičky 95<br />
            783 45 Senice na Hané
          </p>

          <p>
            IČO: 65167384<br />
            DIČ: CZ7403115346
          </p>

          <p>
            Tel: +420 777 072 633<br />
            E-mail: <a href="mailto:info@smicka.eu">info@smicka.eu</a>
          </p>
        </div>
        <div>
          <h3>
            Napište nám
            </h3>
            <p>
          <ContactForm />

          </p>
        </div>
      </div>

    </div>
  )
}

export default Contact