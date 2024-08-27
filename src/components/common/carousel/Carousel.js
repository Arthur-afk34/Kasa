import React, { useState } from 'react';
import './Carousel.scss';
import prevIcon from '../../../assets/images/prev.svg';
import nextIcon from '../../../assets/images/next.svg';

/**
La fonction Carousel affiche une galerie d'images sous forme de carrousel
Il utilise le hook "useState" pour stocker l'index de l'image courante, initialisé à 0. Deux fonctions "nextImage" et "prevImage" sont définies pour gérer le passage à l'image suivante et à l'image précédente respectivement.
@param {Object} props Propriétés du composant.
@param {Array} props.images Tableau d'images.
@returns Le composant Carousel
*/
function Carousel({ images }) {
  
  // Déclaration d'un état local pour stocker l'indice de l'image actuellement affichée
  const [currentImageIndex, setcurrentImageIndex] = useState(0);
  
  // Fonction pour afficher l'image suivante dans le carrousel
  const nextImage = () => {
    
    // Si on est arrivé à la fin du tableau, on retourne à l'indice 0, sinon on incrémente simplement l'indice de 1
    setcurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };
  
  // Fonction pour afficher l'image précédente dans le carrousel
  const prevImage = () => {

    // Si on est au début du tableau, on retourne à l'indice de la dernière image, sinon on décrémente simplement l'indice de 1
    setcurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };
  
  // Retourne l'interface utilisateur du carrousel, composée d'un conteneur, d'une image principale et de boutons pour passer à l'image suivante ou précédente (s'il y a plus d'une image)
  return (
    <div className="carousel">
    {images.length > 1 && (
      <button className="carousel-button carousel-button-prev" onClick={prevImage}>
      <img src={prevIcon} alt="previous"/>
      </button>
      )}
      <img src={images[currentImageIndex]} alt="carousel-img" />
      {images.length > 1 && (
        <button className="carousel-button carousel-button-next" onClick={nextImage}>
        <img src={nextIcon} alt="next"/>
        </button>
        )}
        </div>
        );
      }
      
      // Exporte le composant pour pouvoir être utilisé ailleurs
      export default Carousel;