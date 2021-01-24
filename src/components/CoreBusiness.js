import '../css/Card.css'
import SiteStats from '../images/undraw_site_stats_l57q.svg'
import Blogging from '../images/undraw_blogging_vpvv.svg'
import OnlineShopping from '../images/undraw_Online_shopping_re_k1sv.svg'
import Dashboard from '../images/undraw_dashboard_nklg.svg'
import Marketing from '../images/undraw_Marketing_re_7f1g.svg'
import PortfolioWebsite from '../images/undraw_portfolio_website_lidw.svg'

export default function Experience(props) {
    return (
        <section className="box-card">
            <div className="card">
                <img  src={SiteStats} alt="undraw_site_stats_l57q" className={`img-${props.direction}`}/>
                <p>Site institucional: Quem precisa promover e tornar conhecida sua marca ou empresa.</p>
            </div>
            <div className="card">
                <img  src={Blogging} alt="undraw_blogging_vpvv" className={`img-${props.direction}`}/>
                <p>Blog: Criadores de conteúdos, que rotineiramente postam informações diversas.</p>
            </div>
            <div className="card">
                <img  src={OnlineShopping} alt="undraw_Online_shopping_re_k1sv" className={`img-${props.direction}`}/>
                <p>Loja virtual: Se você ou sua empresa tem algo para vender, seja produto ou serviço.</p>
            </div>
            <div className="card">
                <img  src={Dashboard} alt="undraw_dashboard_nklg" className={`img-${props.direction}`}/>
                <p>CRM: Quem tem negócios que é necessário gerenciar vendas e estoques.</p>
            </div>
            <div className="card">
                <img  src={Marketing} alt="undraw_Marketing_re_7f1g" className={`img-${props.direction}`}/>
                <p>Landing Page: Especial para campanhas de marketing e captura de leads.</p>
            </div>
            <div className="card">
                <img  src={PortfolioWebsite} alt="undraw_portfolio_website_lidw" className={`img-${props.direction}`}/>
                <p>Portfólio: Designado para expor os trabalhos e experiências, e ser visível de uma forma mais profissional.</p>
            </div>
        </section>
    )
}