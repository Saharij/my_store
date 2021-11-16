import './ProductsPositionFilter.scss';

const positons = ['From cheap to expensive', 'From expensive to cheap'];

const ProductsPositionFilter = ({ onChange, value }) => {
  return (
    <select
      onChange={onChange}
      value={value}
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
