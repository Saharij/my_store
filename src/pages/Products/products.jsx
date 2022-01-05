import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import "./Products.scss"
import { user } from "../../redux/store";
import { getProducts } from "./api/products";
import Basket from "../../assets/icons/basket.svg";
import AvatarIcon from "../../assets/icons/avatar.svg";
import ProductsRows from "./components/ProductsRows/ProductsRows";
import ProductsTile from "./components/ProductsTile/ProductsTile";
import RowIcon from"../../assets/images/products-page/row-icon.svg";
import TileIcon from "../../assets/images/products-page/tile-icon.svg";
import ProductsQuantityFilter from "./components/ProductsQuantityFilter/ProductsQuantityFilter";
import ProductsPositionFilter from "./components/ProductsPositionFilter/ProductsPositionFilter";

const Products = () => {
  const [mode, setMode] = useState('tile');
  const currentUserName = useSelector(user);
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
    <>
      <section className="header">
        <ProductsQuantityFilter
          onChange={handleSelect}
          value={selectValue}
        />
        <ProductsPositionFilter
          onChange={handleSelectPosition}
          value={selectPosition}
        />
        <button
          className="header__layout header__layout-tile"
          onClick={handleChangeOnTile}
        >
          <img
            src={TileIcon}
            alt="Tile"
            className="header__layout-icon-tile"
          />
        </button>
        <button
          className="header__layout header__layout-row"
          onClick={handleChangeOnRow}
        >
          <img
            src={RowIcon}
            alt="Row"
            className="header__layout-icon-row"
          />
        </button>
        <div className="header__basket">
          <img
            src={Basket}
            alt="Basket"
            title="It's not working right now because it's under development"
          />
        </div>
        <div className="header__avatar">
          <h4 className="header__avatar-title">
          </h4>
            {currentUserName}
          <img
            src={AvatarIcon}
            alt="avatar"
            className="header__avatar-icon"
          />
        </div>
      </section>
      <section className="products">
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
      </section>
    </>
  );
};

export default Products;
