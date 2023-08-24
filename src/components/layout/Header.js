import '../../styles/components/layout/Header.css'
import MyLogo from '../../images/logo.png';
import {NavLink} from "react-router-dom"

// <NavLink to="/cursos" className={({ isActive}) => isActive ? "activo" :
//undefined }>Nuestros cursos</NavLink>

const Header = (props) =>{
    return(
        <header>
            <div className="logo">
                <img src={MyLogo} alt="logo de la empresa"/>
                <h1>Programa YA!</h1>
            </div>

            <nav>
                <NavLink to="/" className={({ isActive}) => isActive ? "activo" :
                 undefined }>Home</NavLink>
                
                 <NavLink to="/precios" className={({ isActive}) => isActive ? "activo" :
                 undefined }>Precios</NavLink>
                 <NavLink to="/nosotros" className={({ isActive}) => isActive ? "activo" :
                 undefined }>Sobre nosotros</NavLink>
                <NavLink to="/contacto" className={({ isActive}) => isActive ? "activo" :
                 undefined }>Contacto</NavLink>
            </nav>
        </header>
    )
}
export default Header;