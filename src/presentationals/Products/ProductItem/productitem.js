import React from "react";
import eye_icon from "../../../assets/eye-icon.png";
import s from "../ProductItem/ProductItem.module.css";
import defaultProductImage from "../../../assets/product1.jpg";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { images, theme, pk } = product;

  return (
    <div className={s.box__product}>
      <Link to={`/products/${pk}`}>
        <div className={s.product__img}>
          <img
            src={images.length > 0 ? images[0].file : defaultProductImage}
            alt="Product preview"
          />

          <div className={s.product__title}>
            <div className={s.title__text}>{theme}</div>
            <div className={s.title__icon}>
              <img src={eye_icon} alt="Eye icon" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
