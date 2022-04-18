import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import ProductCard from '../components/ProductCard/ProductCard';
import { getAllProducts } from '../services/products';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="containerHome">
      <div className="containerHome__title">
        <h1>Products</h1>

      </div>
      <ul className="containerHome__productlist">
        {
          products.map((item) => (
            <li key={item.title}>
              <ProductCard productsDetails={item} />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default HomePage;
