import { NavLink ,Link} from "react-router-dom"
export default function AskHome(){
    return(
        <div className="askHome">
            <div className="askHome-infos">
                <h2 className="main-title">Ask your pharmacist, <br />
                not the Internet.</h2>
                <p>Lorem ipsum dolor sit amet, con setetur sa dip scing elitr, sed di am no numy eirmod tem por in vidunt ut la bore rem ipsum dolor sit amet, con se tetur</p>
                <NavLink to='/contact' className="btn-principal">Contact us</NavLink>
            </div>
        </div>
    )
}