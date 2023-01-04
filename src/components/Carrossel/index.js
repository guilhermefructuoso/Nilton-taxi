import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './carrossel.css'
import arraial from '../../assets/arraial.png'
import cabralia from '../../assets/cabralia.png'
import caraiva from '../../assets/caraiva.png'
import clubmed from '../../assets/clubmed.png'
import coroa from '../../assets/coroa.png'
import pitinga from '../../assets/pitinga.png'
import stoandre from '../../assets/stoandre.png'
import espelho from '../../assets/espelho.png'
import trancoso from '../../assets/trancoso.png'
import star from '../../assets/estrelas.png'

function Carrossel() {
    const responsive = {
        desktop: {
            breakpoint: { max: 1920, min: 1800 },
            items: 1,
        },
        teste: {
            breakpoint: { max: 1800, min: 1440 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1440, min: 1072 },
            items: 1,
        },

        miniTablet: {
            breakpoint: { max: 1072, min: 700 },
            items: 1,
        },

        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
        },
    }
    return (
        <section id="destinos">
            <div className="central">
                <div className="container-carrossel">
                    <div className="h1-destino">
                        <h1>Destinos</h1>
                        <img src={star} alt="estrelas" width="140px" />
                    </div>
                </div>
                <Carousel responsive={responsive} autoPlaySpeed={30000}>
                    <div className="new-card">
                        <div className="foto">
                            <img src={arraial} alt="praia do arraial" />
                            <div className="label">
                                <h3>Arraial d'Ajuda</h3>
                                <label>
                                    Um destino pra lá de especial, com belezas
                                    naturais exuberantes, riqueza histórica e um
                                    povo acolhedor.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="new-card">
                        <div className="foto">
                            <img src={cabralia} alt="praia de cabralia" />
                            <div className="label">
                                <h3>Santa Cruz Cabrália</h3>
                                <label>
                                    Vizinha de Porto Seguro, Santa Cruz
                                    Cabrália, encanta os turistas com suas
                                    lindas praias e passeios incríveis.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="new-card">
                        <div className="foto">
                            <img src={caraiva} alt="praia de caraiva" />
                            <div className="label">
                                <h3>Caraíva</h3>
                                <label>
                                    O cenário calmo e paradisíaco é perfeito
                                    para quem procura férias de curto ou longo
                                    prazo, paz e sossego.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="new-card">
                        <div className="foto">
                            <img src={clubmed} alt="club med resort" />
                            <div className="label">
                                <h3>Club Med</h3>
                                <label>
                                    O resort fica localizado no alto de um
                                    penhasco, a cerca de 20 minutos do centrinho
                                    de Trancoso.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="new-card">
                        <div className="foto">
                            <img src={coroa} alt="praia de coroa vermelha" />
                            <div className="label">
                                <h3>Coroa Vermelha</h3>
                                <label>
                                    Coroa Vermelha é uma enseada no extremo sul
                                    do estado da Bahia, localizada entre Santa
                                    Cruz Cabrália e Porto Seguro.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="new-card">
                        <div className="foto">
                            <img src={pitinga} alt="praia pitinga" />
                            <div className="label">
                                <h3>Pitinga</h3>
                                <label>
                                    Uma das mais belas da região, banhada com
                                    água morna e transparente, cheia de
                                    encantos, mar esverdeado e falésias.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="new-card">
                        <div className="foto">
                            <img src={stoandre} alt="praia de santo andre" />
                            <div className="label">
                                <h3>Santo André</h3>
                                <label>
                                    Com pouco mais de 900 habitantes o vilarejo
                                    possui 13 quilômetros de costa e diversas
                                    praias belíssimas.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="new-card">
                        <div className="foto">
                            <img src={espelho} alt="praia do espelho" />
                            <div className="label">
                                <h3>Praia do Espelho</h3>
                                <label>
                                    É o destino perfeito para quem busca relaxar
                                    diante do mar da Bahia. Com ótimas pousadas,
                                    bons restaurantes.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="new-card">
                        <div className="foto">
                            <img src={trancoso} alt="trancoso" />
                            <div className="label">
                                <h3>Trancoso</h3>
                                <label>
                                    Localizado a menos de 30 km de Porto Seguro,
                                    o vilarejo é cercado por incríveis praias.
                                </label>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Carrossel
