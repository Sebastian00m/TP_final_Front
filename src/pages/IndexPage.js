import '../styles/components/pages/IndexPage.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import dev1 from '../images/devs/dev1.jpg';
import dev2 from '../images/devs/dev2.jpg';
import dev3 from '../images/devs/dev3.png';
import dev4 from '../images/devs/dev4.jpg';


const IndexPage = (props) => {

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        fade: true,
        autoplay: true
    }

    return (
        <div className="galeria">
            <Slider {...settings}>
                <img src={dev1} alt="" />
                <img src={dev2} alt="" />
                <img src={dev3} alt="" />
                <img src={dev4} alt="" />
            </Slider>
        </div>
    )
}
export default IndexPage;