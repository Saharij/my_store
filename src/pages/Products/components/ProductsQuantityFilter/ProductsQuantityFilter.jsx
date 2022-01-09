import T from 'prop-types';
import './ProductsQuantityFilter.scss';

const options = ['4', '8', '12'];

const ProductsQuantityFilter = ({ onChange, value }) => {
  return (
    <select
        onChange={onChange}
        value={value}
        className="quantity-filter"
      >
        {options.map(item => (
            <option
              value={item}
              key={item}
            >
              Show: {item}
            </option>
        ))}
      </select>
  );
};

ProductsQuantityFilter.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
}

export default ProductsQuantityFilter;
