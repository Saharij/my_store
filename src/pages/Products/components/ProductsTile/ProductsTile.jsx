import ProductCard from "../ProductCard/ProductCard"

const ProductsTile = ({ products }) => {
  return (
    <div className="products__cards">
      {products.map(item => {
        return (
          <div key={item.id}>
            <ProductCard
              product={item}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsTile;
