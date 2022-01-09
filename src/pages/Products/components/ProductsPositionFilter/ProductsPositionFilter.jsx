import './ProductsPositionFilter.scss';

const positons = ['From expensive to cheap', 'From cheap to expensive'];

const ProductsPositionFilter = ({ onChange, value }) => {
  return (
    <select
      onChange={onChange}
      value={value}
      className="position-filter"
    >
      {positons.map(item => (
        <option
          value={item}
          key={item}
        >
          {item}
        </option>
      ))}
    </select>
  );
};

export default ProductsPositionFilter;
