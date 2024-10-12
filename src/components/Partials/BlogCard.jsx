import { useContext ,useState  } from "react";
import { AppContext } from '../ContextData';
import { NavLink } from "react-router-dom";

export default function Blog(props){
    // const {blogs} = useContext(AppContext)
    // const blog=props.blog
    return(
        <div className="blog-card">
            <img src={props.img} alt="" />
            <div className="blog-date">
                <span>{props.date}</span>
            </div>
            <div className="blog-infos">
                <p className='blog-title'>{props.title}</p>
                <NavLink to={`/blog/blogDetail/${props.id}`} className="link">Read more</NavLink>
                {/* {`blogDetail?id=${props.id}`} */}
            </div>
        </div>
    )
}