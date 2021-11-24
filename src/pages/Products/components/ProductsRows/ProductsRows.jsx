import ProductRow from '../ProductRow/ProductRow';

const ProductsRows = ({ products }) => {
  return (
    <div className="products__rows">
      {products.map(item => {
        return (
          <ProductRow
            product={item}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default ProductsRows;
