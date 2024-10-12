import { ImFileText2 } from "react-icons/im";
import { MdOutlineMedicalServices } from "react-icons/md";


export default function AboutAcc (){
    return(
        <div className="about-acc">
            <div className="about-acc-boxes">
                <div className="acc-box one">
                    <div className="about-info">
                        <div className="about-picto"><ImFileText2 /></div>
                        <h4>Refill Prescription</h4>
                        <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eiusm.</p>
                        <a href="#" className="link">Refill here</a>
                    </div>
                    <div className="about-info">
                        <div className="about-picto"><MdOutlineMedicalServices /></div>
                        <h4>Transfer Prescription</h4>
                        <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eiusm.</p>
                        <a href="#" className="link">View options</a>
                    </div>
                </div>
                <div className="acc-box">
                    <h2>Welcome to MyPharm pharmacy we offer the best practices.</h2>
                    <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusm od temponc ididunt. Lorem ipsum dolor sit amet, conse ctetur adipi scing elit, sed do eiusm od ididunt.</p>
                    <div className=""><a href="#" className="btn-principal">Find more</a></div>
                </div> 
            </div>
        </div>
    )
}