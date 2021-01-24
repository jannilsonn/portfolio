import '../css/index.css'
import LinkedIn from '../images/linkedin.svg'
import GitHub from '../images/github.svg'
import Email from '../images/email.svg'

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
                <a href="mailto:contato@janilson.tech?subject=Contato de trabalho" target="_blank" rel="noreferrer">
                    <img src={Email} alt="email"/>
                </a>
            </div>
            <small>Janilson Costa Silva &copy; 2020</small>
        </footer>
    )
}