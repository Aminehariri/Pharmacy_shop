import Banner from '../Partials/Banner'
import { AppContext } from '../ContextData'
import { useContext, useEffect, useState  } from 'react'
import { useParams } from 'react-router'
import Blog from '../Partials/BlogCard'
import { NavLink } from 'react-router-dom'
export default function BlogDetail(){
    const pagename ='Our blogs'
    const pagetitle ='Our blogs'
    // const location = useLocation();
    const {blogs}=useContext(AppContext);
    const { id } = useParams();
    const [activId,setActivId]=useState(id);
    const [similar,setSimilar]=useState([...blogs]);
    const hundleSubmit= () =>{
        // setActivId(id)
        const tab = [...blogs];
        setSimilar(tab.filter(item=>item.id !== activId))
    }
    const blog = blogs[id -1];
    // console.log(id);
    // alert('test');
    // useEffect(()=>{
    //     hundleSubmit();
    // },[id])
    return(
        
        
        <>
            <Banner pageName={pagename} title={pagetitle}></Banner>
            <div className="blogs-detail-page">
            <div className="blog-detail">
             
                    <>
                        <div className='blog-d-img'>
                            <img src={blog.img} alt={blog.title} />
                        </div>
                            <span>{blog.date}</span>
                        <h2>{blog.title}</h2>
                        <p>{blog.text}</p>
                    </>
               
                <div className="blogs-btns">
                    {
                        id > 1 && <NavLink to={`/blog/blogDetail/${id - 1}`} onClick={hundleSubmit} className='btn-principal'>Previous blog</NavLink>
                    }
                    {
                        id < blogs.length && <NavLink to={`/blog/blogDetail/${(parseInt(id)) + 1}`} onClick={hundleSubmit} className='btn-principal'>Next blog</NavLink>
                    }
                </div>
            </div>
                <div className="summular-blogs">
                    <h3>Summular blogs</h3>
                    {
                        
                            similar.slice(0,3).filter(blog => blog.id !== parseInt(id)).map((blog) => (
                                <Blog key={blog.id} id={blog.id} title={blog.title} img={blog.img} text={blog.text} date={blog.date} />
                            ))
                    }
                </div>
            </div>
           
        </>
    )
}