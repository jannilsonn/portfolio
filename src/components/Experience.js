import '../css/Card.css'
import ProjectCompleted from '../images/undraw_project_completed_w0oq.svg'
import MCS from '../images/MCS_LOGO.png'
import SYS from '../images/Logosys.png'

export default function Experience(props) {
    return (
        <section className="box-card">
            <div className="card">
                <img  src={ProjectCompleted} alt="undraw_project_completed_w0oq" className={`img-${props.direction}`}/>
                <p>Minha experiência são com muitos projetos pessoais que não costumo colocar de forma pública, mas privado já que são voltados mais para algumas ideias pessoais.</p>
            </div>
            <div className="card">
                <img  src={MCS} alt="MCS_LOGO" className={`img-${props.direction}`}/>
                <p><a href="http://mcsservicosereformas.com.br/ " target="_ablank" rel="noreferrer">MSC Serviços e Reformas:</a> site institucional desenvolvido para um empreiteiro que visa expor seus trabalhos e captar novos clientes.</p>
            </div>
            <div className="card">
                <img  src={SYS} alt="Logosys" className={`img-${props.direction}`}/>
                <p><a href="https://solucoessys.net/ " target="_ablank" rel="noreferrer">Soluções SYS:</a> é um projeto que estou envolvido, eu não o criei, mas trabalho na manutenção e atualizações do seu sistema SaaS.</p>
            </div>
        </section>
    )
}