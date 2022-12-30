import React from 'react'
import './sobre.css'
import star from '../../assets/estrelas.png'
import clock from '../../assets/icon-clock.png'
import security from '../../assets/icon-security.png'
import like from '../../assets/icon-like.png'
import premiun from '../../assets/icon-premiun.png'
import wifi from '../../assets/icon-wifi.png' 


function Sobre() {
    return (
        <section id="sobre">
            <div className='h1-sobre'>
                <h1>Sobre Nós</h1>
                <img src={star} alt='estrelas' width='140px'/>
            </div>
            <div className="content-left">
                <div className='p-sobre'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
                </div>
                <div className='icons'>
                    <div className='icon'>
                    <img src={clock} alt='icone relogio'/>
                    <p>Pontualidade</p>
                    </div>
                    <div className='icon'>
                    <img src={security} alt='icone relogio'/>
                    <p>Segurança</p>
                    </div>
                    <div className='icon'>
                    <img src={like} alt='icone relogio'/>
                    <p>Conforto</p>
                    </div>
                    <div className='icon'>
                    <img src={premiun} alt='icone relogio'/>
                    <p>Qualidade</p>
                    </div>
                    <div className='icon'>
                    <img src={wifi} alt='icone relogio'/>
                    <p>Wifi</p>
                    </div>
                </div>
            </div>
            
           
        </section>
    )
}

export default Sobre
