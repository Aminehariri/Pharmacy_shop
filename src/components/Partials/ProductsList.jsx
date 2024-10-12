import { useContext, useState ,useEffect } from 'react';
import { AppContext } from '../ContextData';
import Product  from './Product';
import { NavLink } from 'react-router-dom';

export default function ProductsLIst(){
    const [categorieName,setCategorieName]=useState('')
    const {products} =useContext(AppContext)
    const {categories} =useContext(AppContext)
    const [listFilter, setListFilter]=useState([...products])
    const productTable=[...products]
    const ProductCategoie=(value ,e)=>{
        const allCat = document.querySelectorAll('.productsListHome li.product-item ')
        allCat.forEach(element=>console.log(element))
        
        setCategorieName(value)
        setListFilter(
            productTable.filter(prod => prod.Category === value)
        )
    }
    useEffect(()=>{
    },[])
    return(
        <div className="productsList productsListHome">
            <h2 className="main-title">Our products <span className="sub-title">Everything you need</span></h2>
            <div className="product-list">
                <ul className="products-menu">
                {
                    categories.map((cat)=>(
                        <li key={cat.id} className='product-item' onClick={()=>{ProductCategoie(cat.name)}}><button>{cat.name}</button></li>
                    ))
                }
                </ul>
            </div>
            <div className="products-items">
            {
                listFilter.slice(0, 4).map((prod) => (
                    <Product prod={prod} key={prod.id}></Product>
                ))
            }
            </div>
            <div className="center">
            {
                listFilter.length >0 ?(
                        <NavLink to='/products' className="btn-principal">View more</NavLink>
                    ) :(
                        <span >no product found</span>
                    )
                }
            </div>
        </div>
    )
}