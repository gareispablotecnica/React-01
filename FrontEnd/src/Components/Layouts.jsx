// ---> rfec + Enter
import './Layouts.css'

import Logotipo from '../assets/Logo/logo.png'


function Layouts() {
    return (
        <div>
            <header className="encabezado">
                <img src={Logotipo} alt="Logo" title="Logo_Website" />
                <nav className="menu">
                    <a href="">Nostros</a>
                    <a href="">Productos</a>
                    <a href="">Galeria</a>
                </nav>
            </header>
        </div>
    )
}

export default Layouts