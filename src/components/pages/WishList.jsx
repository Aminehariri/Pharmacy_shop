import Banner from '../Partials/Banner'
import img from '../../assets/productsImgs/prod1.jpg'
import { AppContext } from '../ContextData';
import { useContext } from 'react'
export default function WishList(){
    const pagename ='Wishlist'
    const pagetitle ='Wishlist'

    const {products,wishList} =useContext(AppContext)
    return(
        <>
            <Banner pagename={pagename} title={pagetitle}></Banner>
            <div className="wishList-products">
                <div className="wish-products">
                <table className='wishlist-table'>
                    <thead>
                        <tr>
                        <th>Product image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((prod) => (
                        <tr key={prod.id}>
                        <td><img src={prod.image}  alt={prod.name} /></td>
                        <td>{prod.name}</td>
                        <td>{prod.price} $</td> 
                        <td>
                            {prod.inStock ? 'In Stock' : 'Out of Stock'}
                        </td>
                        <td>
                            <button>Add to Cart</button>
                        </td>
                        </tr>
                    ))}

                    </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
