import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import logo from '../assets/logo.png'



export default function Footer(){
    return(
        <footer>
            <div className="foote1">
                <div className="f-one">
                <h3 className="footer-title">About us</h3>
                    {/* <div className="f-logo">
                        <img src={logo} alt="Logo" />
                    </div> */}
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                    <p><FaPhone></FaPhone> + (713) 534 - 2319</p>
                    <p><FaPhone></FaPhone> + (733) 364 - 5123</p>
                    <p><FaPhone></FaPhone> vitasana.ny@example.com</p>
                </div>
                <div className="f-two">
                    <h3 className="footer-title">QUICK ACCESS</h3>
                    <ul className="footer-menu">
                        <li><a href="#" className="link">Home</a></li>
                        <li><a href="#" className="link">About us</a></li>
                        <li><a href="#" className="link">Our service</a></li>
                        <li><a href="#" className="link">Shop</a></li>
                        <li><a href="#" className="link">Blog</a></li>
                        <li><a href="#" className="link">Contact us</a></li>
                    </ul>
                </div>
                <div className="f-three">
                    <h3 className="footer-title">Visite us</h3>
                    <div className="footer-adress">
                        <p>Adress:</p>
                        <p><FaMapMarkerAlt></FaMapMarkerAlt> 45 Hudson Street <br />
                        Villa Rica, GA 30180</p>
                        <p>Working hours:</p>
                        <p><FaRegClock></FaRegClock>Monday to Saturday <br />
                        8 am to 5 pm <br />
                        Sunday – Closed</p>
                        
                    </div>
                </div>
                <div className="f-five">
                    <h3 className="footer-title">Our categories</h3>
                    <ul className="footer-menu">
                        <li><a href="#" className="link">Home</a></li>
                        <li><a href="#" className="link">About us</a></li>
                        <li><a href="#" className="link">Our service</a></li>
                        <li><a href="#" className="link">Shop</a></li>
                        <li><a href="#" className="link">Blog</a></li>
                        <li><a href="#" className="link">Contact us</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer2">
             <div className="center">
                <p>© 2024 Qode Interactive, All Rights Reserved</p>
             </div>
            </div>
        </footer>
    )
}