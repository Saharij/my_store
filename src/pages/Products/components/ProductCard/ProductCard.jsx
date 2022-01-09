import './ProductCard.scss';

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
        <p
          className="product-card__prehead product-card__prehead--true"
        >
          in stock
        </p>
      ) : (
        <p
          className="product-card__prehead product-card__prehead--false"
        >
          not available
        </p>
      )}
      <div className="product-card__image-box">
        <img
          src={source}
          alt=""
          className="product-card__image"
        />
      </div>
      <span className="product-card__review">
        Reviews({review_count})
      </span>
      <div className="product-card__name-box">
        <h5 className="product-card__name">
          {name}
        </h5>
      </div>

      <div className="product-card__price">
        <p className="product-card__price-full">
          {`$ ${price}.00`}
        </p>
        <p className="product-card__price-discount">
          {`$ ${discount_price}.00`}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
