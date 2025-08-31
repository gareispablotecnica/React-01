// ---> rfec + Enter
import './Layouts.css'

import Logotipo from '../assets/Logo/logo.png'
import Instagram from '../assets/Footer/instagram.png'

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
            <section className="intermedio"></section>
            <main></main>
            <footer className="pie">
                <img src={Instagram} alt="" title='Instagram' />
            </footer>
        </div>
    )
}

export default Layouts