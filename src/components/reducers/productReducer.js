import { FETCH_PRODUCTS,FETCH_TRLS, NEW_PRODUCT } from '../actions/types';

const initialState = {
  items: [],
  item: {},
  trls :[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_PRODUCT:
      return {
        ...state,
        item: action.payload
      };
      case FETCH_TRLS :
      return {
        ...state,
        trls: action.payload
      }
    default:
      return state;
  }
}