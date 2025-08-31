// ---> rfec + Enter
import './Layouts.css'

import Logotipo from '../assets/Logo/logo.png'
import Instagram from '../assets/Footer/instagram.png'
import Linkedin from '../assets/Footer/in.png'
import Whatsapp from '../assets/Footer/wht.png'
import Github from '../assets/Footer/github.png'

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
                <img src={Linkedin} alt="" title='Linkedin' />
                <img src={Whatsapp} alt="" title='Whatsapp' />
                <img src={Github} alt="" title='Github' />
            </footer>
        </div>
    )
}

export default Layouts