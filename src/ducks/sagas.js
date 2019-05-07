import { put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';
import { all } from "redux-saga/effects";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../ducks/actions';


export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProducts);
};

export function* watchGetProduct() {
  yield takeEvery(GET_PRODUCT_REQUEST, getProduct);
};


export function* fetchProducts() {
  try {
    const result = yield call(axios.get, 'http://light-it-04.tk/api/posters/');
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: result.data.data});
  } catch(error) {
    yield put({ type: FETCH_PRODUCTS_FAILURE, payload: error });
  }
};

export function* getProduct(action) {
  try {
    const result = yield call(axios.get, `http://light-it-04.tk/api/posters/${ action.id }/`);
    yield put({ type: GET_PRODUCT_SUCCESS, payload: result.data});
  } catch(error) {
    yield put({ type: GET_PRODUCT_FAILURE, payload: error });
  }
};


export default function* rootSaga() {
  yield all([
    watchFetchProducts(),
    watchGetProduct(),
  ]);
 };
