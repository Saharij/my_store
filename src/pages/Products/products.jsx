import { useState, useEffect } from "react";
import { getProducts } from "./api/products";
import ProductCard from "./components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data)
      })
  }, []);

  const handleSelect = ({ target: {}}) => {}

  return (
    <>
      <select
        onChange={handleSelect}
      >
        <option value="5">
          Show: 5
        </option>
        <option value="10">
        Show: 10
        </option>
      </select>
      <div className="products">
        {products.map(item => {
          console.log(item);
          return <ProductCard product={item} key={item.id} />
        })}
      </div>
    </>
  );
};

export default Products;