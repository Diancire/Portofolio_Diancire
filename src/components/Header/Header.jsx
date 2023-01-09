import '../../styles/Header.css'
import CV_Diancire_Diallo_ from '../../assets/CV_Diancire_Diallo_.pdf'
import Me from '../../assets/Me.jpg'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function Header() {
    return (
        <header>
            <div className="container header_container">
                <h1>Dianciré Diallo</h1>
                <h5 className="text-light">Développeuse FullStack Junior</h5>
                <div className='header_info'>
                    <a href={CV_Diancire_Diallo_} className="btn">Télécharger mon CV</a>
                    <a href="#contact" className="btn btn-primary">Me contacter</a>
                </div>
                <div className='me'>
                    <img src={Me} alt="me" />
                </div>
                <a href="#contact" className='scroll_down'>Défiler vers la bas !</a>
                <div className='header_socials'>
                    <a href="https://www.linkedin.com/home?originalSubdomain=fr"><BsLinkedin/></a>
                    <a href="https://github.com/Diancire?tab=repositories"><FaGithub/></a>
                </div>
            </div>
        </header>
    )
}
    
export default Header