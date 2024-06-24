import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_37q6foe', 'template_tp4rp1s', formData, '4sybl1bEMaKIfupGW')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatus('Formulář úspěšně odeslán!');
                setFormData({ email: '', message: '' });
            }, (error) => {
                console.log('FAILED...', error);
                setStatus('Chyba při odesílání formuláře.');
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    váš email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    zpráva:
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                </label>
                <button type="submit">Odeslat</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

export default ContactForm;
