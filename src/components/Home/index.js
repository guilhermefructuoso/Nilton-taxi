import React from 'react'
import './home.css'
import img from '../../assets/home-img.png'
import img2 from '../../assets/home-img2.png'
import car from '../../assets/image-car.png'
import car2 from '../../assets/image-car2.png'
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

                    <div className="btn-home">
                        <AnchorLink href="#contact">
                            Faça seu orçamento
                        </AnchorLink>
                    </div>
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
        </section>
    )
}

export default Home
