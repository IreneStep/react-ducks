import React, { Component, Fragment } from 'react';
import ProductItem from '../../presentationals/ProductItem/productitem';
import { connect } from 'react-redux';
import { getProduct } from '../../ducks/actions';
import Header from '../../presentationals/common/Header/header';
import Footer from '../../presentationals/Products/Footer/footer';

const mapStateToProps = state => ({
  currentProduct: state.currentProduct,
});

const mapDispatchToProps = dispatch => ({
  getProduct: id => {
      dispatch(getProduct(id));
  }
});


class Product extends Component {
  componentDidMount() {
    const {
      getProduct,
      productId,
    } = this.props;

    getProduct(productId);
  }

  render() {
    const {
      currentProduct,
    } = this.props;

    return ( 
      <Fragment>
        <Header />
          { 
            currentProduct ?
              <ProductItem
                product = { currentProduct }
              />
              : null 
          }
        <Footer />
      </Fragment>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (Product);