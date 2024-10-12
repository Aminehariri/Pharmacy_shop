import Banner from '../Partials/Banner'
import { useContext ,useState } from 'react'
import { AppContext } from '../ContextData'
import { useLocation } from 'react-router'
import Product from './Product';

export default function ProductInfo(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId=queryParams.get('id')
    console.log(productId);
    
    const pagename ='Product Details'
    const pagetitle ='Product Details'
    const {products}=useContext(AppContext);
    const prod=products[productId -1];
    const prodCat=products[productId -1].Category
    // console.log(prodCat);
    console.log(productId);


    return(
        <>
            <Banner pageName={pagename} title={pagetitle}></Banner>
            <div className='product-infos'>
                <div className="product-infos-boxes">
                    <div className="p-info-box">
                    <img key={prod.id} src={prod.image} alt={prod.name} />
                    </div>
                    <div className="p-info-box">
                        {
                        <>  
                            <h2 className='product-info-title'>{prod.name}</h2>
                            <p className='prodcut-info-price'>{prod.discount && <span className='product-info-discount'>{prod.discount} $</span> }{prod.price} $</p>
                            
                            <p className='prodcut-info-description'>{prod.description} </p>
                            <div className="p-info-btns">
                                <input placeholder='Contity' className='input' type="number" name="" max={5} min={1} id="" />
                                <button className="btn-principal">Add to carte</button>
                            </div>
                            {/* <button className="link">Add to wishList</button> */}
                            <p className='prodcut-info-categorie'>Category : <span>{prod.Category}</span> </p>
                            <p className='prodcut-info-using'>Product using : <span>{prod.using}</span> </p>
                        </>   
                        }
                    </div>
                </div>
            </div>
            <div className="Related-products">
                <h2 className="main-title">Related products</h2>
                <div className="related-boxes">
                    {
                        
                        products.filter(prod => prod.Category === prodCat && prod.id !==parseInt(productId)) // Filter products that have a Category
                        .map(prod => (  // Map through the filtered products
                               <Product key={prod.id} prod={prod} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}