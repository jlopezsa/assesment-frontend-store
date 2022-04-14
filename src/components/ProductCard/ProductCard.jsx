import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ROUTE_PRODUCT_DETAIL } from '../../routes/routes';
import './ProductCard.scss';

function ProductCard(props) {
  const { productsDetails } = props;
  return (
    <div className="contProduct">
      <div className="contProduct__image">
        <img className="contProduct__image--product" src={productsDetails.image} alt="" />
      </div>
      <div className="contProduct__description">
        {productsDetails.title}
      </div>
      <div className="contProduct__time">
        time
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
