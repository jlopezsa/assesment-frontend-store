/* eslint-disable */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTE_PRODUCT_DETAIL, ROUTE_HOME } from '../../routes/routes';
import './ProductCard.scss';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

function ProductCard(props) {
  const { productsDetails } = props;
  const [ isTimeOver, setIsTimeOver ] = useState(false);
  const ROUTE_LINK = ROUTE_PRODUCT_DETAIL;

  const max = 0.002;
  const min = 0.0005;
  const randomTime = Math.random() * (max - min) + min;

  const THREE_DAYS_IN_MS = randomTime * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const handlerClick = () => {
    if(isTimeOver){
      const ROUTE_LINK = ROUTE_HOME;
    }
  }

  return (
    <div className="contProduct">
      <div className="contProduct__image">
        <img className="contProduct__image--product" src={productsDetails.image} alt="" />
      </div>
      <div className="contProduct__description">
        {productsDetails.title}
      </div>
      <div className="contProduct__time">
        <CountdownTimer targetDate={dateTimeAfterThreeDays} setIsTimeOver={setIsTimeOver} />
      </div>
      <div className="contProduct__button">
        <Link className="contProduct__button--link" id="product-detail" to={ROUTE_LINK}>
          <button className="contProduct__button--push" type="button" onClick={handlerClick}>
            Click to Detail
          </button>
        </Link>
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
