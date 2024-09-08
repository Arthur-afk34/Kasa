import React, { useState } from 'react';
import './Collapse.scss';
import arrow from '../../../assets/images/prev.svg';

/**
  .
@param {*} props - les propriétés passées au composant, qui contiennent le titre et le contenu de la section.
@returns - le composant Collapse qui affiche le titre et le contenu de la section, ainsi qu'un bouton type open/close pour réduire ou agrandir la section.
*/
function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  // fonction pour changer l'état de isOpen
  function toggle() {
    setIsOpen(!isOpen);
  }

  // Définition de la classe CSS en fonction de l'état d'ouverture ou de fermeture du composant
  const arrowClassName = isOpen ? 'collapse__arrow arrow-open' : 'collapse__arrow arrow-closed';
  const collapsClassName = isOpen ? 'collapseText__box box-open' : 'collapseText__box box-closed';

  return (
    <div className='collapse' >
      <button className={arrowClassName} onClick={toggle}>
        <h3>{props.title}</h3>
        <img src={arrow} alt='arrow'/>
      </button>
      {<div className={collapsClassName} onClick={toggle}>{props.children}</div>}
    </div>
  );
}

export default Collapse;

