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
                   Apaixonado pelo sul da Bahia Nilton Jorge resolveu transformar
                   todo o amor pela região em um negócio, com isso compartilhando
                   seus conhecimentos com atedimento de qualidade.
                </p> 
                <p>
                   Nossos serviços são efetuados com pontualidade, segurança, conforto,
                   qualidade e wi-fi gratuito para que você possa aproveitar o melhor 
                   da sua viagem. Contamos com SUV Renault Duster com ar condionado.
                   Todos os requistos que correspodam aos critérios mais exigentes feitos
                   pelos nossos clientes. 
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
