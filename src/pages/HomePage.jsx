import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './HomePage.scss';
import ProductCard from '../components/ProductCard/ProductCard';
import { getAllProducts } from '../services/products';

function HomePage(props) {
  const { onHandleChange } = props;
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
              <ProductCard productsDetails={item} onHandleChange2={onHandleChange} />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

HomePage.propTypes = {
  onHandleChange: PropTypes.shape({
    onHandleChange: PropTypes.func,
  }).isRequired,
};

export default HomePage;
