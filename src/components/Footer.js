import '../css/index.css'
import LinkedIn from '../images/linkedin.svg'
import GitHub from '../images/github.svg'
import Whatsapp from '../images/whatsapp-icon.svg'

export default function Footer() {
    return (
        <footer>
            <div className="info">
                <a href="https://www.linkedin.com/in/janilson-costa-silva" target="_blank" rel="noreferrer">
                    <img src={LinkedIn} alt="linkedin"/>
                </a>
                <a href="https://github.com/Jannilsonn" target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="github"/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5511952955270&text=Ol%C3%A1%20gostaria%20de%20falar%20sobre%20um%20trabalho,%20est%C3%A1%20dispon%C3%ADvel?" target="_blank" rel="noreferrer">
                    <img src={Whatsapp} alt="whatsapp"/>
                </a>
            </div>
            <small>Janilson Costa Silva &copy; 2020</small>
        </footer>
    )
}