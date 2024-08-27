import { Link } from 'react-router-dom';
import kasaIcon from '../../assets/images/kasa.svg';
import './Header.scss'

/**
La fonction Header est un composant qui représente l'en-tête de l'application.
Elle affiche le logo de Kasa et des liens de navigation vers la page "d'accueil" (Home.js) et la page "A propos" (About.js).
@returns le contenu du composant Header
*/

function Header() {
  return (
        <span className='Header'>
          <img src ={kasaIcon} alt='icon kasa'className='kasaIcon'/>
            <nav className='navigationLink'>
              <ul>
                <li>
                  <Link to="/kasa/">Accueil</Link>
                </li>
                <li>
                  <Link to="/kasa/about">A propos</Link>
                </li>
              </ul>
            </nav>
        </span>
  )
}
  
  export default Header;