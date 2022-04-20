import PropTypes from 'prop-types';

function ProductDetailPage(props) {
  const { productDetails } = props;
  return (
    <div className="contDetails">
      <section>
        ProductDetailPage
      </section>
      <div>
        {productDetails.title}
      </div>
      <div>
        {productDetails.category}
      </div>
      <div>
        <img src={productDetails.image} alt="imageProduct" />
      </div>
      <div>
        {productDetails.description}
      </div>
      <div>
        {productDetails.price}
      </div>
      <div>
        {productDetails.rating.rate}
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
