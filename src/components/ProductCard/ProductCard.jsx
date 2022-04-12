import { Link } from 'react-router-dom';
import { ROUTE_PRODUCT_DETAIL } from '../../routes/routes';
import './ProductCard.scss';

function ProductCard() {
  return (
    <div className="contProduct">
      <div className="contProduct__image">
        <img className="contProduct__image--product" src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
      </div>
      <div className="contProduct__description">
        Mens Casual Slim Fit
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

export default ProductCard;
