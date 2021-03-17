  
import { FETCH_PRODUCTS, NEW_PRODUCT  ,FETCH_TRLS } from './types';


export const fetchProducts = () => dispatch => {
  fetch('https://api-test.innoloft.com/product/6781/')
    .then(res => res.json())
    .then( products =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      })
    );
};

export const createProduct = postData => dispatch => {
  // console.log("data-----------pros-->",postData )Í
  fetch('https://api-test.innoloft.com/product/6781/', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(product =>
      // console.log("data------------>",product)
      dispatch({
        type: NEW_PRODUCT,
        payload: product
      })
    );
};

export const fetchTrls = ()=> dispatch => {
  // console.log("data-----------pros-->",postData )Í
  fetch('https://api-test.innoloft.com/trl/' )
    .then(res => res.json())
    .then(trls =>
      // console.log("data------trls------>",trls)
      dispatch({
        type: FETCH_TRLS,
        payload: trls
      })
    );

    
};