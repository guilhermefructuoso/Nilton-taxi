import React from 'react'
import './home.css'
import img from '../../assets/home-img.png'
import img2 from '../../assets/transparent.png'
import car from '../../assets/image-car.png'
import car2 from '../../assets/image-car2.png'
import whats from '../../assets/whatsapp.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '@mui/material/useMediaQuery'

function Home() {
    const isMobile = useMediaQuery('(max-width:700px)')

    return (
        <section id="home">
            <div className="container-home">
                <div className="h1-home">
                    <h1>
                        Aqui você faz a sua viagem com segurança e hora marcada
                    </h1>
                    <div className="home-label">
                        <label>Venha conhecer a Bahia com a gente!</label>
                    </div>
                    <AnchorLink href="#contact">
                        <div className="btn-home">Faça seu orçamento</div>
                    </AnchorLink>
                </div>
                {isMobile ? (
                    <div className="img-home">
                        <img src={img2} alt="praia" />
                    </div>
                ) : (
                    <div className="img-home">
                        <img src={img} alt="praia" />
                    </div>
                )}
                {isMobile ? (
                    <div className="content-right">
                        <img src={car2} alt="carro" />
                    </div>
                ) : (
                    <div className="content-right">
                        <img src={car} alt="carro" />
                    </div>
                )}
            </div>
            <div className="whats">
                <a
                    href="http://wa.me/5573998264201?text=Olá, gostaria de fazer um orçamento!"
                    target="-blank"
                >
                    <img
                        src={whats}
                        alt="botão whatsapp"
                        width={70}
                        height={70}
                    />
                </a>
            </div>
        </section>
    )
}

export default Home
