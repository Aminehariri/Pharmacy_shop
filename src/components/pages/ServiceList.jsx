import Banner from '../Partials/Banner'
import ServiceCard from "../Partials/ServiceCard"
import { useContext } from 'react'
import { AppContext } from '../ContextData'
import AskHome from '../Partials/AskHome'

export default function ServiceLIst(){
    const pagename ='Our services'
    const pagetitle ='Our services'
    const {services} =useContext(AppContext)
    // const service= props.service
    return(
        <>
            <Banner pageName={pagename} title={pagetitle}></Banner>
            <div className="serviceList">
                <div className="serviceList-boxes">
                {services.map((service)=>
                <div className="serviceList-boxe">
                    <ServiceCard service={service}></ServiceCard>
                </div>
                )}
                </div>
            </div>
            <AskHome></AskHome>
        </>
    )
}