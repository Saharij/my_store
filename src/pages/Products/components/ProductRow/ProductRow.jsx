import './ProductRow.scss';

const ProductRow = ({ product: {
  name,
  in_stock,
  source,
  review_count,
  discount_price,
  price,
} }) => {
  return (
    <div className="product-row">
      <div className="">
        <div className="product-row__image-box">
          <img
            src={source}
            alt={name}
            className="product-row__image"
          />
        </div>
        <span className="product-row__review">
          Reviews({review_count})
        </span>
      </div>

      <div className="product-row__info">
        <h5 className="product-row__name">
          {name}
        </h5>
        <div className="product-row__price">
          <p className="product-row__price-full">
            {`$ ${price}.00`}
          </p>
          <p className="product-row__price-discount">
            {`$ ${discount_price}.00`}
          </p>
        </div>
      </div>

      <table className="product-row__table table">
        <tbody>
          <tr className="table__row">
            <td className="table__cell">
              CPU
            </td>
            <td className="table__cell table__cell--position">
              N/A
            </td>
          </tr>
          <tr className="table__row table__row--pair">
            <td className="table__cell">
              Featured
            </td>
            <td className="table__cell table__cell--position">
              N/A
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__cell">
              I/O Ports
            </td>
            <td className="table__cell table__cell--position">
              N/A
            </td>
          </tr>
        </tbody>
      </table>

      {in_stock ? (
        <p
          className="product-row__prehead product-row__prehead--true"
        >
          in stock
        </p>
      ) : (
        <p
          className="product-row__prehead product-row__prehead--false"
        >
          not available
        </p>
      )}
    </div>
  );
};

export default ProductRow;
