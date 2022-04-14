import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTE_PRODUCT_DETAIL } from '../../routes/routes';
import './ProductCard.scss';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

function ProductCard(props) {
  const { productsDetails } = props;

  const THREE_DAYS_IN_MS = 0.001 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="contProduct">
      <div className="contProduct__image">
        <img className="contProduct__image--product" src={productsDetails.image} alt="" />
      </div>
      <div className="contProduct__description">
        {productsDetails.title}
      </div>
      <div className="contProduct__time">
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
      <div className="contProduct__button">
        <button className="contProduct__button--push" type="button">
          <Link className="contProduct__button--link" id="product-detail" to={ROUTE_PRODUCT_DETAIL}>Go To Detail</Link>
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
