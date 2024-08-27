import './Footer.scss';
import kasaIcon from '../../assets/images/kasa.svg'

function Footer() {
    return (
        <footer className='footer'>
        <h2><img src ={kasaIcon} alt='icon kasa'className='kasaIconBlanc'/></h2>
        <p>© 2020 Kasa. All rights reserved.</p>
        </footer>
    )
}

export default Footer;