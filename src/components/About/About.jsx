import Me from '../../assets/Me.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import '../../styles/About.css'

function About() {
    return (
        <section id="about">
            <h5>Faire connaissance avec</h5>
            <h2>MOI</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={Me} alt="about me" />
                    </div>
                </div>
                <div className="about_content">
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon'/>
                            <h5>Expériences</h5>
                            <small>6 mois</small>
                        </article>
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon'/>
                            <h5>Projets</h5>
                            <small>5</small>
                        </article>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aperiam dicta reprehenderit ut sequi accusantium quia animi, tempora quibusdam optio magnam itaque maxime facilis eos delectus. Voluptates animi at temporibus.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Me contacter</a>
                </div>
            </div>
        </section>
    )
}
    
export default About