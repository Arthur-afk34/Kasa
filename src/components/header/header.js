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
                  <Link to="/kasa/" className={(
                    (nav) => (nav.isActive ? 
                        "nav-active" : 
                        "nav-unactive")
                    )}>Accueil</Link>
                </li>
                <li>
                  <Link to="/kasa/about" className={(
                    (nav) => (nav.isActive ? 
                        "nav-active" : 
                        "nav-unactive"))}>A propos</Link>
                </li>
              </ul>
            </nav>
        </span>
        // <div className='header'>
        //     <Link to="/">
        //         <div className='logo'>
        //             <img 
        //                 src="/images/Vector_K.svg"
        //                 alt="Lettre K du logo Kasa" 
        //                 className='logo__letterK' />
        //             <img 
        //                 src="/images/Group_A.svg" 
        //                 alt="Lettre A du logo Kasa en forme de maison" 
        //                 className='logo__letterAM' />
        //             <img 
        //                 src="/images/Vector_S.svg" 
        //                 alt="Lettre S du logo Kasa" 
        //                 className='logo__letterS' />
        //             <img 
        //                 src="/images/Vector_A.svg" 
        //                 alt="Lettre A du logo Kasa" 
        //                 className='logo__letterA' />
        //         </div>
        //     </Link>
        //     <ul className='nav'>
        //         <Link to="/" className={(
        //             (nav) => (nav.isActive ? 
        //                 "nav-active" : 
        //                 "nav-unactive")
        //             )}>
        //             <li>Accueil</li>
        //         </Link>
        //         <Link to="/about" className={(
        //             (nav) => (nav.isActive ? 
        //                 "nav-active" : 
        //                 "nav-unactive"))}>
        //             <li>A Propos</li>
        //         </Link>
        //     </ul>
        // </div>
  )
}
  
  export default Header;