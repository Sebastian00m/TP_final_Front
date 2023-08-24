import '../styles/components/pages/NosotrosPage.css'

import Elon from '../images/elonmusk.jpg';
import Jeff from '../images/jeff bezos.jpg';
import Mark from '../images/Mark-Zuckerberg.jpg';
import Martin from '../images/martingalperin.jpg';
import Satya from '../images/Satya-Nadella-RT.png';

const NosotrosPage =(props) => {
    return (
        <main className="holder">
        <h2>Nuestros Tutores</h2>
        <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi optio iure, eum
            molestias sed quos officiis ab laboriosam. Quas ducimus earum fuga velit repellat perspiciatis explicabo
            repellendus pariatur illum.
            Omnis quaerat, ullam dolores quasi similique iste praesentium neque est, rerum accusantium ex necessitatibus
            quae amet sint fugit? Repudiandae, magnam consequuntur! Rem, fugit nihil ea quo doloremque aut quod quia.
            Aliquid obcaecati itaque laborum magni blanditiis officiis dolor recusandae ducimus asperiores mollitia
            nesciunt ipsum facilis illo, quasi dicta at quis repellendus deserunt ratione, pariatur rem praesentium odit
            corrupti? Ducimus, aspernatur.</p>
        <div className="tutores">
            <div className="tutor">
                <img src={Elon} alt="Elon-Musk"/>
                <h3>Elon Musk</h3>
                <h4>Tutor de Full Stack</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet quos adipisci, officia et minima
                    reprehenderit quod magnam quia libero asperiores iusto possimus, omnis pariatur voluptatibus
                    suscipit! Quae, veniam reiciendis?</p>
            </div>
            <div className="tutor">
                <img src={Jeff} alt="Jeff-bezos"/>
                <h3>Jeff Bezos</h3>
                <h4>Tutor de Desarrollo Frontend con React</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet quos adipisci, officia et minima
                    reprehenderit quod magnam quia libero asperiores iusto possimus, omnis pariatur voluptatibus
                    suscipit! Quae, veniam reiciendis?</p>
            </div>
            <div className="tutor">
                <img src={Mark} alt="Mark-Zuckerberg"/>
                <h3>Mark Zuckerberg</h3>
                <h4>Tutor de Desarrollo Backend</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet quos adipisci, officia et minima
                    reprehenderit quod magnam quia libero asperiores iusto possimus, omnis pariatur voluptatibus
                    suscipit! Quae, veniam reiciendis?</p>
            </div>
            <div className="tutor">
                <img src={Martin} alt="Martin-Galperin"/>
                <h3>Martin Galperin</h3>
                <h4>Tutor de Java Script</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet quos adipisci, officia et minima
                    reprehenderit quod magnam quia libero asperiores iusto possimus, omnis pariatur voluptatibus
                    suscipit! Quae, veniam reiciendis?</p>
            </div>
            <div className="tutor">
                <img src={Satya} alt="Satya-Nadella"/>
                <h3>Satya Nadella</h3>
                <h4>Tutor de Python</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab amet quos adipisci, officia et minima
                    reprehenderit quod magnam quia libero asperiores iusto possimus, omnis pariatur voluptatibus
                    suscipit! Quae, veniam reiciendis?</p>
            </div>
        </div>
    </main>
    );
}
export default NosotrosPage;