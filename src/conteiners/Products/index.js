import React, { Component } from "react";
import ProductList from "../../presentationals/Products/ProductList/productlist";
import Header from "../../presentationals/common/Header/header";
import Footer from '../../presentationals/Products/Footer/footer';
import { connect } from "react-redux";
import { fetchProducts } from "../../ducks/actions";
import s from '../Products/ProductPage.module.css';

const mapStateToProps = state => ({
  productList: state.productList,
  searchValue: state.searchValue
});

class Products extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;

    fetchProducts();
  }

  render() {
    const { productList, searchValue } = this.props;

    return (
      <div className={s.wrapper}>
        <Header />

        <ProductList products={productList} searchValue={searchValue} />

        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Products);
