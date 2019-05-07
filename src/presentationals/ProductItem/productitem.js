import React from "react";
import s from "../ProductItem/productitem.module.css";
import defaultProductImage from "../../assets/product2.jpg";

const ProductItem = ({ product }) => {
  const { images, owner, text, price, theme } = product;

  const { username } = owner;

  return (
    <div className={s.wrap}>
      <div className={s.imageWrap}>
        <img
          className={s.image}
          src={images.length > 0 ? images[0].file : defaultProductImage}
          alt="Large product preview"
        />
      </div>

      <div className={s.infoBlock}>
        <p>{`Theme: ${theme}`}</p>

        <p>{`Additional info: ${text}`}</p>

        <p>
          from <span className={s.username}>{username}</span>
        </p>

        <p>
          <span className={s.price}>{price} $</span>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
