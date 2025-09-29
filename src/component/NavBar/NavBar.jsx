import { Link } from "react-router";
import CartWidget from './CartWidget'
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-container">

                    <div className="logo">
                        <img src="../Img/249df4a6d118078006405a21e161e617.png" alt="Logo"></img>
                        <Link to="/">
                            <span className="logo-text">Vikhing Design</span>
                        </Link>
                    </div>

                <div className="nav-right">
                    
                    <div className="button">
                        <Link to="/category/Guitarra Eléctrica">
                            <button className="btn">Guitarras Electricas</button>
                        </Link>
                    </div>

                    <div className="button">
                        <Link to="/category/Bajo Eléctrico">
                            <button className="btn">Bajos</button>
                        </Link>
                    </div>

                    <div className="button">
                        <button className="btn">Varios</button>
                    </div>
                    
                    <CartWidget/>
                    
                </div>
            </div>
        </nav>
    )
}
export default NavBar;