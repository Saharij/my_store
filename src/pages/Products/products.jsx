import { useState, useEffect } from "react";
import { getProducts } from "./api/products";

export const Products = () => {
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
      <ul>
        {products.map(({
          id,
          name,
          price,
          discount_price,
          in_stock,
          review_count,
          source,
        }) => (
          <li
            key={id}
          >
            {in_stock ? (
              <p>in stock</p>
            ) : (
              <p>not available</p>
            )}
            <img
              src={source}
              alt={`Product ${id}`}
            />
            <span>Reviews({review_count})</span>
            <h5>{name}</h5>
            <p>{discount_price}</p>
            <p>{price}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
