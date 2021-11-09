import { useState, useEffect } from "react";
import { getProducts } from "./api/products";
import ProductsQuantityFilter from "./components/ProductsQuantityFilter/ProductsQuantityFilter";
import ProductCard from "./components/ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectValue, setSelectValue] = useState('12')

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data)
      })
  }, []);

  const handleSelect = ({ target: { value }}) => {
    setSelectValue(value);
  }

  const np = products.slice(0, selectValue);

  return (
    <>
      <ProductsQuantityFilter
        onChange={handleSelect}
        value={selectValue}
      />
      <div className="products">
        {np.map(item => {
          return <ProductCard product={item} key={item.id} />
        })}
      </div>
    </>
  );
};

export default Products;
