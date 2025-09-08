
import CartWidget from './CartWidget'
export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <img src="../Img/249df4a6d118078006405a21e161e617.png" alt="Logo"></img>
                    <span className="logo-text">Vikhing Design</span>
                </div>
                <div className="nav-right">
                    <div className="dropdown">
                        <button className="dropdown-btn">Productos ▼</button>
                        <div className="dropdown-content">
                            <a href="/productos/electronicos">📱 Electrónicos</a>
                            <a href="/productos/ropa">👕 Ropa y Accesorios</a>
                            <a href="/productos/hogar">🏠 Hogar y Jardín</a>
                            <a href="/productos/deportes">⚽ Deportes</a>
                            <a href="/productos/libros">📚 Libros</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="dropdown-btn">Servicios ▼</button>
                        <div className="dropdown-content">
                            <a href="/servicios/consultoria">💼 Consultoría</a>
                            <a href="/servicios/soporte">🔧 Soporte Técnico</a>
                            <a href="/servicios/mantenimiento">🛠️ Mantenimiento</a>
                            <a href="/servicios/instalacion">📦 Instalación</a>
                            <a href="/servicios/atencion">📞 Atención 24/7</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="dropdown-btn">Empresa ▼</button>
                        <div className="dropdown-content">
                            <a href="/empresa/about">ℹ️ Sobre Nosotros</a>
                            <a href="/empresa/equipo">👥 Nuestro Equipo</a>
                            <a href="/empresa/contacto">📧 Contacto</a>
                            <a href="/empresa/ubicacion">📍 Ubicación</a>
                            <a href="/empresa/careers">💼 Trabajar con Nosotros</a>
                        </div>
                    </div>
                    
                    <CartWidget/>
                    
                </div>
            </div>
        </nav>
    )
}
