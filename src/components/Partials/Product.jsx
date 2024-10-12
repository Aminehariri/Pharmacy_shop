import { FaRegHeart } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { LuEye } from "react-icons/lu";
import { useContext ,useState ,useEffect } from "react";
import { AppContext } from '../ContextData';
import { Button, message } from 'antd';
import { NavLink } from "react-router-dom";

export default function Product(props){
    const [messageApi, contextHolder] = message.useMessage();

    const info = () => {
      messageApi.info('Hello, Ant Design!');
    };
    const prod= props.prod
    const { products ,wishList,setWishList ,carte,setCarte} = useContext(AppContext);
    // console.log(wishList )
    useEffect(()=>{
            // console.log(wishList);
        },[wishList]);
    return(
        <>
            <div className="product-item" >
                <div className="prod-btns">
                    <div className="p-btn"><NavLink to={`/productInfo?id=${prod.id}`} title="View product" ><LuEye /></NavLink></div>
                    <div className="p-btn"><button title="Add to wishList" onClick={() => setWishList(prod)}><FaRegHeart /></button></div>
                    <div className="p-btn"><button title="Add to carte"><SlHandbag /></button></div>
                </div>
                {prod.discount && (
                    <div className="discount-num">
                        <span className='discount-value'>-{((prod.price - prod.discount) / prod.price * 100).toFixed(0)}%</span>
                    </div>
                )}
                <a href="#">
                    <img src={prod.image} alt={prod.name} />
                </a>
                {/* <span>{prod.Category}</span> */}
                <div className="product-info">
                    <h3>{prod.name}</h3>
                    <span>{prod.Category}</span>
                    <p className='discount-price'>
                        {prod.discount ? <span className="old-price">{prod.price}$ </span> :<span className="price">{prod.price}$ </span>}
                        {prod.discount && (<span className="discount"> - {prod.discount}$</span>)}
                    </p>
                </div>
            </div>
          
        </>
        
        // <h2>test</h2>
    )
}