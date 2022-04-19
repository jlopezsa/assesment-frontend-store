/* eslint-disable */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTE_PRODUCT_DETAIL, ROUTE_HOME } from '../../routes/routes';
import './ProductCard.scss';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import { useEffect } from 'react';

function ProductCard(props) {
  const { productsDetails } = props;
  const [ isTimeOver, setIsTimeOver ] = useState(false);
  const [ timeLimit, setTimeLimit ] = useState('');

  useEffect(()=>{
    // pasar esto a la homepage y a cada compoente se le envia (props) el dateTimeAfterThreeDays
    const setData = () => {
      const max = 0.001;
      const min = 0.00020;
      const randomTime = Math.random() * (max - min) + min;

      const THREE_DAYS_IN_MS = randomTime * 24 * 60 * 60 * 1000;
      const NOW_IN_MS = new Date().getTime();
      const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
      setTimeLimit(dateTimeAfterThreeDays);
    }
    setData();
  },[]);

  return (
    <div className="contProduct">
      <div className="contProduct__image">
        <img className="contProduct__image--product" src={productsDetails.image} alt="" />
      </div>
      <div className="contProduct__description">
        {productsDetails.title}
      </div>
      <div className="contProduct__time">
        <CountdownTimer targetDate={timeLimit} setIsTimeOver={setIsTimeOver} />
      </div>
      <div className="contProduct__button">
      <button className="contProduct__button--push" type="submit">
        <Link className="contProduct__button--link" to={isTimeOver? ROUTE_HOME : ROUTE_PRODUCT_DETAIL }>
          Click to Detail
        </Link>
      </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  productsDetails: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
