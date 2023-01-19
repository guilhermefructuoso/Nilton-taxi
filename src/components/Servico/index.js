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
                                Transporte receptivo para garantir o conforto e a
                                acessibilidade dos turistas que chegam em seu
                                destino.
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
                                Translado com segurança para você chegar ao seu
                                destino sem preocupações, com horário marcado no
                                ato da contratação.
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
                                Nossas rotas abrangem todos os passeios e pontos
                                turisticos da região de Porto Seguro, Arraial
                                d'Ajuda, Trancoso e Caraíva.
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
                                Para você que tem um evento e precisa estar no
                                horário, conte com a nossa pontualidade, serviço
                                exclusivo e de qualidade.
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
                                Trabalhamos com serviço de taxi executivo, uma
                                opção de baixo custo feito em nosso carro
                                executivo, o valor é estabelecido no ato da
                                reserva.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servico
