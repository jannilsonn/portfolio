import '../css/Card.css'
import HTML5 from '../images/html5.svg'
import CSS3 from '../images/css-3.svg'
import JavaScript from '../images/javascript.svg'
import Git from '../images/git.svg'
import Jquery from '../images/jquery.svg'
import SaaS from '../images/sass.svg'
import ReactJS from '../images/react-js.svg'
import MaterialUI from '../images/material-ui.svg'
import NextJS from '../images/next-js.svg'
import NodeJS from '../images/node-js.svg'
import PHP from '../images/php.svg'
import Laravel from '../images/laravel.svg'
import MySQL from '../images/mysql.svg'
import WordPress from '../images/wordpress-blue.svg'

export default function Skill(props) {
    return (
        <section className="box-card">
            <div className="card">
                <img  src={HTML5} alt="html5" className={`img-min img-${props.direction}`}/>
                <p>HTML: Uma das primeiras tecnologias senão a primeira para um desenvolvedor web, sua importância é gigantesca quando falamos de SEO.</p>
            </div>
            <div className="card">
                <img  src={CSS3} alt="css-3" className={`img-min img-${props.direction}`}/>
                <p>CSS: Logo após aprender a estruturar uma página vem a parte de embelezamento, onde a criatividade fala mais alto e colocamos para fora o artista interior.</p>
            </div>
            <div className="card">
                <img  src={JavaScript} alt="javascript" className={`img-min img-${props.direction}`}/>
                <p>JavaScript: Minha preferida, essa linguagem de programação da vida para uma página e muito mais, além de estar nas principais plataformas.</p>
            </div>
            <div className="card">
                <img  src={Git} alt="git" className={`img-min img-${props.direction}`}/>
                <p>Git: Pensando em fazer um projeto lindo e maravilhoso, e por alguma razão perdê- lo, por isso o git é interessante para versionar o código fonte dando mais segurança para fazer as alterações necessárias além de muito mais.</p>
            </div>
            <div className="card">
                <img  src={Jquery} alt="jquery" className={`img-min img-${props.direction}`}/>
                <p>JQuery: Framework que facilita a trabalhar com o verboso JS, para novos projetos dificilmente é escolhida.</p>
            </div>
            <div className="card">
                <img  src={SaaS} alt="sass" className={`img-min img-${props.direction}`}/>
                <p>SASS: Tecnologia incrível que facilita muito para o desenvolvimento front-end, o que o CSS não faz é feito com ela.</p>
            </div>
            <div className="card">
                <img  src={ReactJS} alt="react-js" className={`img-min img-${props.direction}`}/>
                <p>React JS: Como falar de páginas reativas se não falarmos de React JS, umas das primeiras escolhas ao desenvolver um projeto.</p>
            </div>
            <div className="card">
                <img  src={MaterialUI} alt="material-ui" className={`img-min img-${props.direction}`}/>
                <p>Material UI: Um facilitador ao criar o front-end, para quem quer agilidade e qualidade essa ferramenta é uma boa escolha.</p>
            </div>
            <div className="card">
                <img  src={NextJS} alt="next-js" className={`img-min img-${props.direction}`}/>
                <p>Next JS: Que tecnologia incrível, ao conhecê-la fiquei admirado com o seu poder, e recomendo para qualquer tipo de projeto web.</p>
            </div>
            <div className="card">
                <img  src={NodeJS} alt="node-js" className={`img-min img-${props.direction}`}/>
                <p>Node JS: Para quem gosta de JS e back-end o Node JS é ideal, seu ecossistema cresceu absurdamente, foi adotado por diversas empresas.</p>
            </div>
            <div className="card">
                <img  src={PHP} alt="php" className={`img-min img-${props.direction}`}/>
                <p>PHP: Essa linguagem é uma das pioneiras da web, construir páginas dinâmicas é com ela mesmo, é muito popular no mundo web.</p>
            </div>
            <div className="card">
                <img  src={Laravel} alt="Laravel" className={`img-min img-${props.direction}`}/>
                <p>Laravel: Particularmente ao trabalhar com PHP, uso esse framework excelente, muitos adoram trabalhar com ele.</p>
            </div>
            <div className="card">
                <img  src={MySQL} alt="mysql" className={`img-min img-${props.direction}`}/>
                <p>MySQL: Para suas páginas terem conteúdo principalmente dinâmico temos que guardar em algum lugar, e o popular MySQL é uma ótima escolha.</p>
            </div>
            <div className="card">
                <img  src={WordPress} alt="wordpress-blue" className={`img-min img-${props.direction}`}/>
                <p>WordPress: Uma ferramenta onde facilidade e agilidade andam juntos, um dos mais famosos CMS que foi criado inicialmente para lidar com os blogs, mas já explora muitas outras áreas.</p>
            </div>
        </section>
    )
}