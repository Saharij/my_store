import { useState, useEffect } from "react";
import { getProducts } from "./api/products";
import ProductsQuantityFilter from "./components/ProductsQuantityFilter/ProductsQuantityFilter";
import ProductsPositionFilter from "./components/ProductsPositionFilter/ProductsPositionFilter";
import ProductCard from "./components/ProductCard/ProductCard";
import "./Products.scss"

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectValue, setSelectValue] = useState('12');
  const [moreProducts, setMoreProducts] = useState(1);
  const [selectPosition, setSelectPosition] = useState('');

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data)
      })
  }, []);

  const handleShowMore = () => {
    setMoreProducts(prevValue => prevValue + 1);
  }

  const handleSelect = ({ target: { value }}) => {
    setSelectValue(value);
    setMoreProducts(1);
  }

  const handleSelectPosition = ({ target: { value }}) => {
    setSelectPosition(value);
  }

  let np = products.slice(0, selectValue * moreProducts);
  np.sort((a, b) => {
    if (selectPosition === 'From cheap to expensive') {
      return a.discount_price - b.discount_price;
    } else {
      return b.discount_price - a.discount_price;
    }
  });

  return (
    <div className="products">
      <p className="products__logo">
        Shop&#38;Tech
      </p>
      <ProductsQuantityFilter
        onChange={handleSelect}
        value={selectValue}
      />
      <ProductsPositionFilter
        onChange={handleSelectPosition}
        value={selectPosition}
      />
      <div className="products__list">
        {np.map(item => {
          return (
            <div className="products__item">
              <ProductCard
                product={item}
                key={item.id}
              />
            </div>
          )
        })}
      </div>
      {(selectValue * moreProducts) < products.length && (
        <button
          onClick={handleShowMore}
          className="products__button-show-more"
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default Products;
