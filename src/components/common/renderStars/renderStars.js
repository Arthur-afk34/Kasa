import React from 'react';
import stars from '../../../assets/images/stars.svg';
import './renderStars.scss';

export default function renderStars(numStars) {
  const starsArray = []; //Tableau permet à stocker les img des étoiles énumérées plus bas
  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      starsArray.push(<img key={i} src={stars} alt="Full Star" />);
    } else {
      starsArray.push(<img key={i} src={stars} alt="Grey Star" style={{ filter: 'grayscale(100%)' }} />);
    }
  }
  return starsArray;
}

//Si i est inférieur à numStars, nous colorons l'étoile en jaune en laissant sa couleur par défaut. Sinon, l'étoile est coloriée en grise grâce au "filter: grayscale(100%)."
