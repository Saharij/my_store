import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import "./Products.scss"
import { user } from "../../redux/store";
import { getProducts } from "./api/products";
import Logo from "../../assets/icons/logo.svg";
import Basket from "../../assets/icons/basket.svg";
import AvatarIcon from "../../assets/icons/avatar-light.svg";
import ProductDate from "./components/ProductDate/ProductDate";
import ProductsRows from "./components/ProductsRows/ProductsRows";
import ProductsTile from "./components/ProductsTile/ProductsTile";
import RowIcon from"../../assets/images/products-page/row-icon.svg";
import ProductSearch from "./components/ProductSearch/ProductSearch";
import TileIcon from "../../assets/images/products-page/tile-icon.svg";
import ProductsQuantityFilter from "./components/ProductsQuantityFilter/ProductsQuantityFilter";
import ProductsPositionFilter from "./components/ProductsPositionFilter/ProductsPositionFilter";

const Products = () => {
  const [mode, setMode] = useState('tile');
  const currentUserName = useSelector(user);
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectValue, setSelectValue] = useState('12');
  const [moreProducts, setMoreProducts] = useState(1);
  const [selectPosition, setSelectPosition] = useState('');

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data)
      })
  }, []);

  const handleSearch = ({ target: { value }}) => {
    setSearchValue(value);
  };

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
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
          <h4 className="header__title">
            Online store
          </h4>
        </div>
        <div className="header__date">
          <ProductDate />
          7th January 2022
        </div>
        <div className="header__avatar">
          <div
            className="header__basket"
            title="It's not working right now because it's under development"
          >
            <img
              src={Basket}
              alt="Basket"
            />
          </div>
          <h4 className="header__avatar-title">
            {currentUserName}
          </h4>
          <img
            src={AvatarIcon}
            alt="avatar"
            className="header__avatar-icon"
          />
        </div>
      </section>
      <section className="products">
        <div className="products-control">
          <ProductSearch
            value={searchValue}
            handleSearch={handleSearch}
          />
          <div className="products-filters">
            <ProductsQuantityFilter
              onChange={handleSelect}
              value={selectValue}
            />
            <ProductsPositionFilter
              onChange={handleSelectPosition}
              value={selectPosition}
            />
            <div className="products-control__layout-buttons">
              <button
                className="products-control__layout products-control__layout-tile"
                onClick={handleChangeOnTile}
              >
                <img
                  src={TileIcon}
                  alt="Tile"
                  className="products-control__layout-icon-tile"
                />
              </button>
              <button
                className="products-control__layout products-control__layout-row"
                onClick={handleChangeOnRow}
              >
                <img
                  src={RowIcon}
                  alt="Row"
                  className="products-control__layout-icon-row"
                />
              </button>
            </div>
          </div>
        </div>
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
