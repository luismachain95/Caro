import React, { Component } from "react";
import './Caro.css';
import CaroItem from './CaroItem';
import Dots from './Dots';
import Arrows from './Arrows';
class Caro extends Component {

    constructor(props){
        super(props);

        //Autoplay
        const autoplay = (this.props.config && this.props.config.autoplay)? true: false;
        
        //Time
        const time = (this.props.config && this.props.config.time)? this.props.config.time : 3000;
        
        // Show Dots
        let dots =  true;
        if(this.props.config && this.props.config.dots === false){
            dots = false;
        }

        // Show arrow
        let arrow =  true;
        if(this.props.config && this.props.config.arrow === false){
            arrow = false;
        }

        this.state = {
            images: [
                "https://luismachain95.github.io/Caro/image/shoes1.jpg",
                "https://luismachain95.github.io/Caro/image/shoes2.jpg",
                "https://luismachain95.github.io/Caro/image/shoes3.jpg",
                "https://luismachain95.github.io/Caro/image/shoes4.jpg"
            ],
            index: 0,
            translate: 0,
            interval: null,
            autoplay: autoplay,
            time: time,
            dots: dots,
            arrow: arrow
        }
        
        
    }

    componentDidMount = () => {

        
        //Controla el autoplay
        if(this.state.autoplay){
            this.startTimer() //Inicia el Timer para el autoplay
        }
    }

    
    startTimer = () => {
        const interval = setInterval(() => {
            this.next()
        }, this.state.time)

        this.setState({
            interval
        })
    }

    /**
     * Limpio el timer del state y crea denuevo el timer, reiniciando el timer  
     */
    resetTimer = () => {
        const interval = clearInterval(
            this.state.interval
        )
        this.setState({
            interval
        })
        this.startTimer()
    }

    prev = (e) => {
        const { 
            index,      // Indice
        } = this.state;

        if(index === 0){ // Cuando estoy en indice cero, ya no puedo ir atras
            return;
        }

        // No soy indice = 0, entonces
        this.setState(prevState => ({
            index: prevState.index - 1,
            translate: prevState.translate + this.widthCaro()
        }))

        //Controla el autoplay
        if(this.state.autoplay){
            this.resetTimer()
        }
    }
    next = (e) => {

        const { 
            index,      // Indice
            images      //Todas la imagenes
        } = this.state;
        const length = images.length; //Cantidad de imagenes
        

        //Si soy la ultima imagen, entonces
        if(index === length - 1){
            return this.setState({
                index: 0,
                translate: 0
            })
        }

        // No soy la ultima imagen, entonces
        this.setState(prevState => ({
            index: prevState.index + 1,
            translate: prevState.translate + -(this.widthCaro())
        }));

        //Controla el autoplay
        if(this.state.autoplay){
            this.resetTimer()
        }
        
    }

    /**
     * Retorna el tamaño del visor de nuestro carousel
     */
    widthCaro(){
        return document.querySelector('.caro').clientWidth
    }
    

    clickDot = (id) => {
        
        const { 
            index,   // Indice
            translate
        } = this.state; 

        //Si haces click en el mismo lugar donde estas, no hacer nada
       if(id === index) return;

        if(id > index){
            this.setState({
                translate:  -id * (this.widthCaro())
            });
        } else {
            this.setState({
                translate:  translate + (index - id ) * (this.widthCaro())
            });
        }

        this.setState({
            index: id
        });

        //Reinicia el timer
        
        //Controla el autoplay
        if(this.state.autoplay){
            this.resetTimer()
        }
    }


    render() {

        const { 
            images,     //Imagenes que vienen del State
            index,      // Indice
            translate,  // Cuanto se va a trasladar
            dots,       //Dots
            arrow       //Arrows
        } = this.state;

        const style = {
            transform: `translate(${translate}px)`,
            transition: 'transform ease-out 0.45s'
        }

        return (
           <div className="caro">
                <div className="content"
                    style={style}
                >
                    {
                        images.map((image, index) => (
                            <CaroItem key={index} image={image} />
                        ))
                    }
                </div>
                
                <Dots show={dots} clickDot={this.clickDot} index={index} images={images}/>

                <Arrows show={arrow} clickNext={this.next} clickPrev={this.prev}/>
           </div> 
        )
    }
}

export default Caro;