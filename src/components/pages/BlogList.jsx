import Banner from '../Partials/Banner'
import { AppContext } from '../ContextData'
import { useContext } from 'react'
import BlogCard from '../Partials/BlogCard'
import Product from '../Partials/Product'
import AskHome from '../Partials/AskHome'

export default function BlogList(){
    const {blogs,products} =useContext(AppContext)
    const pagename ='Our blog'
    const pagetitle ='Our blog'
    return(
        <>
            <Banner pageName={pagename} title={pagetitle}></Banner>
            <div className="blog-list">
                {/* <div className="main-title">Our blog list</div> */}
                <div className="blog-cards">
                    {
                        blogs.map(blog=>(
                            <BlogCard id={blog.id} date={blog.date} img={blog.img} title={blog.title}></BlogCard>
                        )
                        )
                    }
                     {/* {products.map((prod) => (
                    <Product key={prod.id} prod={prod} />
                ))} */}
                </div>
            </div>
            <AskHome></AskHome>
        </>
    )
}