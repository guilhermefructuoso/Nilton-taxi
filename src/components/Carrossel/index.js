import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carrossel.css"
import destino from '../../assets/destino.png'
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
      };
 return (
    <section id="destinos">
        
        
        <div className="central">
        <div className="container-carrossel">
        <div className="h1-servico">
                    <h1>Serviços</h1>
                    <img src={star} alt="estrelas" width="140px" />
                </div>

        </div>
        <Carousel responsive={responsive} autoPlaySpeed={30000}>
          <div className="new-card">
          <div className="foto">
            <img src={destino} alt="praia do arraial" />
            <div className="label">
              <h3>Arraial d'Ajuda</h3>
              <label>
                Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                voluptatem ut mollitia repellendus ut esse magni et corporis
                dolorem. Ut rerum esse ea dignissimos verita
              </label>
            </div>
          </div>
          </div>
          <div className="new-card">
          <div className="foto">
            <img src={destino} alt="praia de cabralia" />
            <div className="label">
              <h3>Santa Cruz Cabrália</h3>
              <label>
                Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                voluptatem ut mollitia repellendus ut esse magni et corporis
                dolorem. Ut rerum esse ea dignissimos verita
              </label>
            </div>
          </div>
          </div>
          <div className="new-card">
          <div className="foto">
            <img src={destino} alt="praia de caraiva" />
            <div className="label">
              <h3>Caraíva</h3>
              <label>
                Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                voluptatem ut mollitia repellendus ut esse magni et corporis
                dolorem. Ut rerum esse ea dignissimos verita et molestiae
                voluptatem ut mollitia repellendus ut esse.
              </label>
            </div>
          </div>
          </div>
          <div className="new-card">
          <div className="foto">
            <img src={destino} alt="club med resort" />
            <div className="label">
              <h3>Club Med</h3>
              <label>
                Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                voluptatem ut mollitia repellendus ut esse magni et corporis
                dolorem. Ut rerum esse ea dignissimos verita
              </label>
            </div>
          </div>
          </div>
          <div className="new-card">
          <div className="foto">
            <img src={destino} alt="praia de coroa vermelha" />
            <div className="label">
              <h3>Coroa Vermelha</h3>
              <label>
                Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                voluptatem ut mollitia repellendus ut esse magni et corporis
                dolorem. Ut rerum esse ea dignissimos verita
              </label>
            </div>
          </div>
          </div>
          <div className="new-card">
          <div className="foto">
            <img src={destino} alt="praia pitinga" />
            <div className="label">
              <h3>Pitinga</h3>
              <label>
                Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                voluptatem ut mollitia repellendus ut esse magni et corporis
                dolorem. Ut rerum esse ea dignissimos verita et molestiae
                voluptatem ut mollitia repellendus ut esse.
              </label>
            </div>
          </div>
          </div>
          <div className="new-card">
          <div className="foto">
            <img src={destino} alt="praia de santo andre" />
            <div className="label">
              <h3>Santo André</h3>
              <label>
                Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                voluptatem ut mollitia repellendus ut esse magni et corporis
                dolorem. Ut rerum esse ea dignissimos verita et molestiae
                voluptatem ut mollitia repellendus ut esse.
              </label>
            </div>
          </div>
          </div>
          <div className="new-card">
          <div className="foto">
            <img src={destino} alt="praia do espelho" />
            <div className="label">
              <h3>Praia do Espelho</h3>
              <label>
                Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                voluptatem ut mollitia repellendus ut esse magni et corporis
                dolorem. Ut rerum esse ea dignissimos verita et molestiae
                voluptatem ut mollitia repellendus ut esse.
              </label>
            </div>
          </div>
          </div>
          <div className="new-card">
          <div className="foto">
            <img src={destino} alt="trancoso" />
            <div className="label">
              <h3>Trancoso</h3>
              <label>
                Lorem ipsum dolor sit amet. Cum veniam voluptatum et molestiae
                voluptatem ut mollitia repellendus ut esse magni et corporis
                dolorem. Ut rerum esse ea dignissimos verita et molestiae
                voluptatem ut mollitia repellendus ut esse.
              </label>
            </div>
          </div>
          </div>
        </Carousel>
        </div>
      
    </section>
 );
}

export default Carrossel;