import { NavLink } from "react-router-dom"
export default function ServiceCard(props){
    
    const service= props.service

    return(
        
        <>
            <div className="service-box">
                <img src={service.img} alt={service.title} />
                <div className="service-info">
                <h4>{service.title}</h4>
                <NavLink to={`/serviceList/serviceDetail?id=${service.id}`}>Read more</NavLink>
                </div>
            </div>   
        </>
    )
}
