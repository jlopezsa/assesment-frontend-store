import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTE_PRODUCT_DETAIL, ROUTE_HOME } from '../../routes/routes';
import './ProductCard.scss';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

function ProductCard(props) {
  const { productsDetails, onHandleChange2 } = props;
  const [isTimeOver, setIsTimeOver] = useState(false);
  const [timeLimit, setTimeLimit] = useState('');

  const max = 0.1;
  const min = 0;
  const randomTime = Math.random() * (max - min) + min;

  const RANDOM_START_TIME = randomTime * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterRandomTime = NOW_IN_MS + RANDOM_START_TIME;

  useEffect(() => {
    const setData = () => {
      setTimeLimit(dateTimeAfterRandomTime);
    };
    setData();
  }, []);

  const handlerClick = () => {
    onHandleChange2(productsDetails);
  };

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
        <button className="contProduct__button--push" type="submit" onClick={handlerClick}>
          <Link className="contProduct__button--link" to={isTimeOver ? ROUTE_HOME : ROUTE_PRODUCT_DETAIL}>
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
  onHandleChange2: PropTypes.func.isRequired,
};

export default ProductCard;
