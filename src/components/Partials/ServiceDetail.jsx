import { AppContext } from "../ContextData";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Banner from "./Banner";
import { useLocation } from "react-router-dom";

export default function ServiceCard(props) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const serviceId = parseInt(queryParams.get('id'));
    const { services } = useContext(AppContext);

    const service = services.find(s => s.id === serviceId);
    

    if (!service) {
        return <p>Service not found</p>;
    }

    return (
        <>
            <Banner />
            <div className="service-detail">
                <h2 className="main-title">{service.title}</h2>
                <div className="serviceDetail-info">
                    <p>{service.text}</p>
                    <img src={service.img} alt={service.title} />
                    <NavLink to='/serviceList' className='btn-principal'>Back</NavLink>
                </div>
            </div>   
        </>
    );
}
