import logo from '../assets/logo.png'
import { FaRegUser } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import { IoSearch } from "react-icons/io5";
import { BrowserRouter as Router, Route, Routes, Link  , NavLink} from 'react-router-dom';


export default function Header(){
    return(
        <>
            <header className="header">
                <div className="first-h">
                    <p className="h-text">Your Health, Our Priority – Expert Care and Quality Products at Your Fingertips.</p>
                </div>
                <nav className="nav">
                    <div className="header-logo">
                        <NavLink to='/'><img src={logo} alt='Logo' className='logo'></img></NavLink>
                    </div>
                    <div className="header-menu">
                        <ul className='menu-principal'>
                            <li className='menu-item'><NavLink to='/'>Home</NavLink></li>
                            <li className='menu-item'><NavLink to='/aboutUs' >ABOUT US</NavLink></li>
                            <li className='menu-item'><NavLink to='/serviceList' >Our service</NavLink></li>
                            <li className='menu-item'><NavLink to='/products'  >Products</NavLink></li>
                            <li className='menu-item'><NavLink to='/blog'  >Blog</NavLink></li>
                            
                            <li className="menu-item"><NavLink to='/contact' >CONTACT</NavLink></li>
                        </ul>
                    </div>
                    <div className="header-infos">
                        <div className="header-btns">
                            <button title='Search'><IoSearch /></button>
                            {/* <button title='Wichlist'><LuHeart /></button> */}
                            <NavLink to='/wishList'  ><LuHeart /></NavLink>
                            <button  title='LogIN'><FaRegUser /></button>
                            <button title='Cart' className='carte'><SlHandbag /><span className='cart-num'>0</span></button>
                        </div>
                    </div>
                    
                </nav>
            </header>
        </>
    )
}