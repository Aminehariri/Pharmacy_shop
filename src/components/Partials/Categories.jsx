

import React, { useContext  } from 'react';
import { AppContext } from '../ContextData'; 
import { NavLink } from 'react-router-dom';
export default function Categories() {
  const { categories } = useContext(AppContext);
  const categoriesDate=categories
  console.log(categoriesDate ,categories);

  
  return (
    <div className="categories">
        <h1 className="main-title">Our categories
        <span className='sub-title'>Discover our range of products for every health need</span>
        </h1>
        <div className="Categories-list">
            {categoriesDate.map((category) => (
            <div key={category.id} className="category-item">
            <img src={category.image} alt={category.name} className="category-image" />
            <div className='categorie-infos'>
            <h3 className="category-name">{category.name}</h3>
            <NavLink className="link" to={`/products?id=${category.id}`}>{category.description}</NavLink>
            </div>
            </div>
        ))}
        </div>
    </div>
    
  );
}
