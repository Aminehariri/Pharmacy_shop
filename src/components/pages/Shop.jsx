import Banner from '../Partials/Banner'
import Catalogue from '../Partials/Catalogue'
import AskHome from '../Partials/AskHome'
export default function Shop(){
    const pagename ='Our products'
    const pagetitle ='Our products'
    return(
        <>
            <Banner pageName={pagename} title={pagetitle}></Banner>
            <Catalogue></Catalogue>
            <AskHome></AskHome>
        </>
    )
}