import * as React from "react";
import './Home.scss';
import bannerImage from '../../assets/images/banner.jpg';
import Cards from "../../components/common/cards/Cards";
import logsData from "../../data/logements.json";

/**
La fonction Home est un composant qui représente la page d'accueil de l'application.
Elle affiche une bannière avec une citation et une image, ainsi qu'une liste de biens immobiliers disponibles.
@returns le contenu du composant Home
*/
function Home() {
    return(
        <main className="Home">
            <section className="Banner">
                <div className="BannerOverlay">
                    <p className="BannerQuote">Chez vous, partout et ailleurs</p>
                </div>
            <img src ={bannerImage} alt="Falaise"/> 
            </section>
        
            <section>
                <div className="cardContainer">                
                    <Cards data={logsData}/>                
                </div>
            </section>
        </main>
        )
    }
    
    
    export default Home;