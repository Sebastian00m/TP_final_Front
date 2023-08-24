import '../styles/components/pages/ContactoPage.css';
import { useState } from 'react';
import axios from 'axios';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name] : value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post ('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
                <div>
                    <h2>Contacto rapido</h2>
                    <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                        <p>
                            <label for="Nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="email">email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="Telefono">Telefono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="Mensaje">Mensaje</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        <input type="submit" value="Enviar" />
                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}

                </div>
                <div className="datos">
                    <h2>Otras vias de comunicación</h2>
                    <p>Contactese a travez de las siguientes redes sociales oficiales</p>
                        <ul>
                            <li><FontAwesomeIcon icon={faPhone} />   Telefono: 1134567897</li>
                            <li><FontAwesomeIcon icon={faEnvelope} />   Email: contacto@gmail.com</li>
                            <li><FontAwesomeIcon icon={faFacebook} />   Facebook:</li>
                            <li><FontAwesomeIcon icon={faInstagram} />   Instagram:</li>
                            <li><FontAwesomeIcon icon={faWhatsapp} />   Whatsapp:</li>
                        </ul>
                </div>
        </main>
    );
}
export default ContactoPage;