import { useState, useEffect } from "react";

import "./Products.scss"
import { getProducts } from "./api/products";
import ProductsRows from "./components/ProductsRows/ProductsRows";
import ProductsTile from "./components/ProductsTile/ProductsTile";
import RowIcon from"../../assets/images/products-page/row-icon.svg";
import TileIcon from "../../assets/images/products-page/tile-icon.svg";
import ProductsQuantityFilter from "./components/ProductsQuantityFilter/ProductsQuantityFilter";
import ProductsPositionFilter from "./components/ProductsPositionFilter/ProductsPositionFilter";

const Products = () => {
  const [mode, setMode] = useState('tile');
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

  const handleChangeOnTile = () => {
    setMode('tile');
  }

  const handleChangeOnRow = () => {
    setMode('rows');
  }

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
      <ProductsQuantityFilter
        onChange={handleSelect}
        value={selectValue}
      />
      <ProductsPositionFilter
        onChange={handleSelectPosition}
        value={selectPosition}
      />
      <button
        className="products__button-shape products__button-shape-tile"
        onClick={handleChangeOnTile}
      >
        <img
          src={TileIcon}
          alt="Tile"
          className="products__button-icon-tile"
        />
      </button>
      <button
        className="products__button-shape products__button-shape-row"
        onClick={handleChangeOnRow}
      >
        <img
          src={RowIcon}
          alt="Row"
          className="products__button-icon-row"
        />
      </button>
      {mode === 'tile' && (
        <ProductsTile
          products={np}
        />
      )}
      {mode === 'rows' && (
        <ProductsRows
          products={np}
        />
      )}

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
