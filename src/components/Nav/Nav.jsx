import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import '../../styles/Nav.css'
import { useState } from 'react'

function Nav() {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}><BiBook /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    )
}
    
export default Nav