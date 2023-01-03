import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import './footer.css'
import logo2 from '../../assets/logo2.svg'
import { BsInstagram } from "react-icons/bs"
import line from '../../assets/line.png'
import card from '../../assets/cartoes.png'
import card1 from '../../assets/cartoes1.png'
import bark from '../../assets/barkout.svg'

function Footer() {
    const isTablet = useMediaQuery('(max-width: 1280px)')
    return (
        <section id='footer'>
        <div className="footer-content">
            <div className="footer-container">
                <div className="logo-footer">
                    <img src={logo2} alt="Sistema Logo" />
                </div>
                <div className="h3-footer">
                    <div className="contact">
                        <h3>CONTATO:</h3>
                    </div>
                    <div className="email">
                        <a
                            href="http://wa.me/5573998294201?text=Olá, gostaria de fazer um orçamento!"
                            target="-blank"
                            alt="telefone"
                        >
                            +55 73 99826-4201 
                            
                        </a>
                      
                        <address>
                            <a
                                href="mailto:portosegurotaxi1@gmail.com"
                                alt="telefone"
                                target="-blank"
                            >
                                teste@gmail.com
                            </a>
                        </address>
                    </div>
                </div>
                <div className="social">
                    <div className="follow">
                        <h3>SIGA-NOS:</h3>
                    </div>
                    <div className="insta">
                        <a
                            href="https://www.instagram.com/portoseguro.taxi/"
                            target="-blank" 
                        >
                            
                            <BsInstagram size={30} color="#000" />
                        </a>
                    </div>
                </div>
                <div className="pagamentos">
                    <div className="h3-footer">
                        <h3>PAGAMENTOS:</h3>
                        {isTablet ? (
                            <div className="cartoes">
                                <img src={card1} alt="pagamentos" />
                            </div>
                        ) : (
                            <div className="cartoes">
                                <img src={card} alt="pagamentos" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="rodape">
                <div className="linha">
                    <img src={line} alt="Sistema Logo" />
                </div>
                <div className="p-footer">
                    <p>NiltonTaxi 2023 © Desenvolvido por</p>
                    <div>
                        <a
                            href="https://www.instagram.com/agenciabarkout/"
                            target="-blank"
                        >
                            {' '}
                            <img src={bark} alt="Sistema Logo"  />{' '}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Footer
