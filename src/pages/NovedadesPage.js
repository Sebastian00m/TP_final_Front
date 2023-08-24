import '../styles/components/pages/NovedadesPage.css'

import { useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';





const NovedadesPage = (props) => {
    const [loading, setloading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setloading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setloading(false);
        };

        cargarNovedades();
    }, []);
    return (
        <section className='holder'>
            <h2>Nuestros Cursos</h2>
                <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, natus? Quia accusantium illo veritatis excepturi necessitatibus quis vel deleniti quisquam minima non dicta quasi, fuga quaerat quae. Perferendis, nobis tempore.
                    Quo perspiciatis deleniti fugiat. Soluta illum perspiciatis doloribus laudantium esse. Explicabo quis odit modi earum voluptas culpa officia mollitia id quod rerum, illo, iusto praesentium laudantium quos vitae, doloribus natus?
                    Impedit assumenda animi voluptatum, quia facilis eligendi nisi veritatis provident ullam optio minus laborum id sequi aperiam nostrum facere dolores dolor excepturi quibusdam voluptas? Reprehenderit animi eum ex optio exercitationem?</p>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                         image={item.imagen} course={item.curso} price={item.precio}
                        students={item.calumnos}  />)

            )}
        </section>
    );
}

export default NovedadesPage;