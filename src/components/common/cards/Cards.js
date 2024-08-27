import React from 'react';
import { Link } from "react-router-dom";
import './Cards.scss';

/**
 * Ce composant Cards affiche une liste de cartes, où chaque carte contient une image, un titre et un lien cliquable. Les données de chaque carte sont passées en tant que "prop" sous forme d'un tableau d'objets "data", qui est parcouru à l'aide de la méthode ".map()" pour créer des composants enfants pour chaque objet. Chaque composant enfant est ensuite affiché dans une div avec une classe "cardPreview", et contient une image avec une source dynamique basée sur "lot.cover", un titre avec un texte dynamique basé sur "lot.title", et un lien cliquable avec un URL dynamique basé sur "lot.id". La clé unique pour chaque composant enfant est basée sur "lot.id". 
 * @param {data} un tableau d'objets contenant les données à afficher pour chaque carte
 * @returns une liste de cartes générées à partir des données fournies via les "props" 
 */
function Cards({data}) {
  
  return (
    <>    
    {data.map((lot)=>
      <div className="cardPreview" key={lot.id}>
        <Link to = {`/kasa/logs/${lot.id}`} className="cardLink">
          <img src={lot.cover} alt={lot.title} className="cardCover"/>
          <h2 className="cardTitle">{lot.title}</h2>
        </Link>
      </div>)
    }
    </>
    );
  }
  
  
  export default Cards;