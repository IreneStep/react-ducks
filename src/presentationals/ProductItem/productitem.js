import React from 'react';
import styles from '../ProductItem/productitem.module.css';
import defaultProductImage from "../../assets/product2.jpg";

const ProductItem = ({ product }) => {
  const {
    images,
    owner,
    text,
    price,
    theme,
  } = product;

  const {
    username
  } = owner;

  return (
      <div className={ styles.wrap }>
        <div className={ styles.imageWrap }>
          <img
            className= { styles.image }
            src={ images.length > 0 ? images[0].file : defaultProductImage }
            alt="Large product preview"
          />
        </div>

        <div className={ styles.infoBlock }>
          <p>
            {`Theme: ${ theme }`}
          </p>

          <p>
          {`Additional info: ${ text }`}
          </p>

          <p >
            from <span className={ styles.username }>{ username }</span>
          </p>

          <p>
            <span className={ styles.price }>{ price } $</span>
          </p>
        </div>
      </div>
  );
};

export default ProductItem;