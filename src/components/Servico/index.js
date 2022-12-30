import './servico.css'
import recep from '../../assets/icon-recep.svg'
import star from '../../assets/estrelas.png'
import translado from '../../assets/icon-translado.svg'
import passeio from '../../assets/icon-passeio.svg'
import evento from '../../assets/icon-evento.svg'
import taxi from '../../assets/icon-taxi.svg'

function Servico() {
    return (
        <section id="servico">
            <div className="container-servico">
                <div className="h1-servico">
                    <h1>Serviços</h1>
                    <img src={star} alt="estrelas" width="140px" />
                </div>

                <div className="icons-servico">
                    <div className="icon-servico">
                        <img src={recep} alt="icone atendimento" />
                        <div className="h2-servico">
                            <h2>Receptivo</h2>
                        </div>
                        <div className="p-servico">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt
                            </p>
                        </div>
                    </div>

                    <div className="icon-servico">
                        <img src={translado} alt="icone conforto" />
                        <div className="h2-servico">
                            <h2>Translado</h2>
                        </div>
                        <div className="p-servico">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt
                            </p>
                        </div>
                    </div>
                    <div className="icon-servico">
                        <img src={passeio} alt="icone qualidade" />
                        <div className="h2-servico">
                            <h2>Passeios</h2>
                        </div>
                        <div className="p-servico">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt
                            </p>
                        </div>
                    </div>
                    <div className="icon-servico">
                        <img src={evento} alt="icone pontualidade" />
                        <div className="h2-servico">
                            <h2>Eventos</h2>
                        </div>
                        <div className="p-servico">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt
                            </p>
                        </div>
                    </div>
                    <div className="icon-servico">
                        <img src={taxi} alt="icone petfriendely" />
                        <div className="h2-servico">
                            <h2>Taxi Executivo</h2>
                        </div>
                        <div className="p-servico">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servico
