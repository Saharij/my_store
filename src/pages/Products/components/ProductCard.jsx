const ProductCard = ({ product: {
  name,
  in_stock,
  source,
  review_count,
  discount_price,
  price,
} }) => {
  return (
    <div className="product-card">
      {in_stock ? (
        <p>in stock</p>
      ) : (
        <p>not available</p>
      )}
      <img
        src={source}
        alt=""
        className="product-card__image"
      />
      <span className="product-card__review">
        Reviews({review_count})
      </span>
      <h5 className="product-card__name">
        {name}
      </h5>
      <p className="product-card__discount-price">
        {discount_price}
      </p>
      <p className="product-card__price">
        {price}
      </p>
    </div>
  );
};

export default ProductCard;
