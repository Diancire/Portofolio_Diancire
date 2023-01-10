import {BsPatchCheckFill} from 'react-icons/bs'
import '../../styles/Competences.css'

function Compétences() {
    return (
        <section id="experiences">
            <h2>Mes Compétences</h2>
            <div className="container competences_container">
                <div className="competences_frontend">
                    <h3>Développement Frontend</h3>
                    <div className="competences_content">
                        <article className="competences_details">
                            <BsPatchCheckFill className='competences_details_icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>
                        <article className="competences_details">
                            <BsPatchCheckFill className='competences_details_icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>
                        <article className="competences_details">
                            <BsPatchCheckFill className='competences_details_icon'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>
                        <article className="competences_details">
                            <BsPatchCheckFill className='competences_details_icon'/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Débutant</small>
                            </div>
                        </article>
                        <article className="competences_details">
                            <BsPatchCheckFill className='competences_details_icon'/>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Débutant - Intermédiaire</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="competences_backend">
                <h3>Développement Backend</h3>
                    <div className="competences_content">
                        <article className="competences_details">
                            <BsPatchCheckFill className='competences_details_icon'/>
                            <div>
                                <h4>NodeJs</h4>
                                <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>
                        <article className="competences_details">
                            <BsPatchCheckFill className='competences_details_icon'/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermédiaire</small>
                            </div>
                        </article>
                        <article className="competences_details">
                            <BsPatchCheckFill className='competences_details_icon'/>
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Débutant</small>
                            </div>
                        </article>
                        <article className="competences_details">
                            <BsPatchCheckFill className='competences_details_icon'/>
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Débutant</small>
                            </div>
                        </article>
                        <article className="competences_details">
                            <BsPatchCheckFill className='competences_details_icon'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Débutant</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
    
export default Compétences