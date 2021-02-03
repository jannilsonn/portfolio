import '../css/Card.css'
import OnlineCV from '../images/undraw_online_cv_qy9w.svg'
import WebDeveloper from '../images/undraw_web_developer_p3e5.svg'
import ProgressiveApp from '../images/undraw_progressive_app_m9ms.svg'
import Programming from '../images/undraw_programming_2svr.svg'
import Certificate from '../images/undraw_certificate_343v.svg'
import Businessman from '../images/undraw_businessman_97x4.svg'
import Ideas from '../images/undraw_ideas_s70l.svg'

export default function Profile(props) {
    return (
        <section className="box-card" style={{display: props.display}}>
            <div className="card">
                <img  src={OnlineCV} alt="undraw_online_cv_qy9w" className={`img-${props.direction}`}/>
                <main><p>Esse CV online descreve um pouco sobre minhas qualidades como profissional, habilidades, experiência e negócio principal.</p></main>
            </div>
            <div className="card">
                <img  src={WebDeveloper} alt="undraw_web_developer_p3e5" className={`img-${props.direction}`}/>
                <p>Autodidata: Sempre tive facilidade para aprender, seja qual for o assunto, se me interessar e for importante para o que faço ou vou fazer eu me dedico e aprendo, sempre busco conhecimentos novos e tento aplicar o máximo na prática, dessa forma consigo medir minha performance.</p>
            </div>
            <div className="card">
                <img  src={ProgressiveApp} alt="undraw_progressive_app_m9ms" className={`img-${props.direction}`}/>
                <p>Curioso: Algo muito forte em mim, é dessa forma que adquiri muitos conhecimentos pelo simples fato de querer saber como funciona e como é feito.</p>
            </div>
            <div className="card">
                <img  src={Programming} alt="undraw_programming_2svr" className={`img-${props.direction}`}/>
                <p>Focado: Para desenvolver um projeto é preciso dedicação e foco, quanto mais envolvido mais fácil de explorar e resolver os problemas, estar dentro do negócio.</p>
            </div>
            <div className="card">
                <img  src={Certificate} alt="undraw_certificate_343v" className={`img-${props.direction}`}/>
                <p>Persistência: Não há dúvidas de que para ter sucesso normalmente a persistência é efetiva, com ela não desistimos dos nossos projetos e sonhos tão fácil assim, até chegarmos no resultado esperado.</p>
            </div>
            <div className="card">
                <img  src={Businessman} alt="undraw_businessman_97x4" className={`img-${props.direction}`}/>
                <p>Empreendedor: Desde dos 15 anos de idade tive vontade de empreender, e aprendi que para isso não precisa criar uma empresa, as atitudes e o comportamento que demonstram o espírito empreendedor, o pensar na constante melhora.</p>
            </div>
            <div className="card">
                <img  src={Ideas} alt="undraw_ideas_s70l" className={`img-${props.direction}`}/>
                <p>Inovador: Inovar é uma das minhas melhores qualidades, quando vejo algo que pode ser melhorado ou criado, lá estou estudando uma fórmula.</p>
            </div>
        </section>
    )
}