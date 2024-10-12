import { NavLink } from "react-router-dom";
import { AppContext } from "../ContextData";
import Product from "./Product";
import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function Catalogue() {
    const { products } = useContext(AppContext);
    const { categories } = useContext(AppContext);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categorieId = queryParams.get('id'); 
    
    const [categorieName, setCategorieName] = useState(categorieId ? categories[parseInt(categorieId) - 1]?.name : "");
    // const [filteredProducts,setFiltredProducts]=useState 

    useEffect(() => {
        if (categorieId) {
            const categoryData = categories[parseInt(categorieId) - 1];
            if (categoryData) {
                setCategorieName(categoryData.name);
            }
        } else {
            setCategorieName(""); 
        }
    }, [categorieId, categories]);

    const handleProductCat = (e) => {
        const catName = e.currentTarget.innerHTML;
        setCategorieName(catName);
    };

    const showAllProducts = () => {
        setCategorieName('');
    }

    const filteredProducts = categorieName
        ? products.filter((prod) => prod.Category === categorieName)
        : products;

    return (
        <div className='catalog-products'>
            <div className="catalog-filter">
                <h3>Product Categories</h3>
                <ul className="products-menu">
                    <li  className="product-item"><button className="categorieBtn" onClick={showAllProducts}>Show all </button></li>
                    {categories.map((categorie) => (
                        <li key={categorie.id} className="product-item">
                            
                            <button className="categorieBtn" onClick={handleProductCat}>{categorie.name}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="catalog-list">
                {filteredProducts.map((prod) => (
                    <Product key={prod.id} prod={prod} />
                ))}
            </div>
        </div>
    );
}
