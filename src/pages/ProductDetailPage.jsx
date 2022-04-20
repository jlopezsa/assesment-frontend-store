import PropTypes from 'prop-types';
import './ProductDetailPage.scss';

function ProductDetailPage(props) {
  const { productDetails } = props;
  return (
    <div className="contDetails">
      <div className="contDetails__title-page">
        <h2>
          Product Detail
        </h2>
      </div>
      <div className="contDetails__header">
        <div className="contDetails__header--title">
          {productDetails.title}
        </div>
        <div className="contDetails__header--category">
          Category:
          <br />
          {productDetails.category}
        </div>
      </div>
      <div className="contDetails__image">
        <img className="contDetails__image--product" src={productDetails.image} alt="imageProduct" />
      </div>
      <div className="contDetails__description">
        <hr />
        {productDetails.description}
      </div>
      <div className="contDetails__footer">
        <div className="contDetails__footer--price">
          {`Price:   ${productDetails.price}`}
        </div>
        <div className="contDetails__footer--rate">
          {`Rate: ${productDetails.rating.rate}`}
        </div>
      </div>
    </div>
  );
}

ProductDetailPage.propTypes = {
  productDetails: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.shape({
      rate: PropTypes.number,
    }),
  }).isRequired,
};

export default ProductDetailPage;
