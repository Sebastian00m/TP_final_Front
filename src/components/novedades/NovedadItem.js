import react from 'react';
import '../../styles/components/pages/NovedadesPage.css'

const NovedadItem = (props) => {
    const { course, price, students, image } = props;

    return (

        <div className='Container'>

            <div className="carta">
                <img src={image}/>
                <div className="info">
                    <h3>{course}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, natus? Quia accusantium illo veritatis excepturi necessitatibus quis vel deleniti quisquam minima non dicta quasi, fuga quaerat quae. Perferendis, nobis tempore.
                    Quo perspiciatis deleniti fugiat. Soluta illum perspiciatis doloribus laudantium esse. Explicabo quis odit modi earum voluptas culpa officia mollitia id quod rerum, illo, iusto praesentium laudantium quos vitae, doloribus natus?
                    Impedit assumenda animi voluptatum, quia facilis eligendi nisi veritatis provident ullam optio minus laborum id sequi aperiam nostrum facere dolores dolor excepturi quibusdam voluptas? Reprehenderit animi eum ex optio exercitationem?</p>
                    <h3>Precio x Cant. de Alumnos: ${price}</h3>
                    <h3>Cant de alumnos: {students}</h3>
                </div>
            </div>
        </div>

    );
}

export default NovedadItem;