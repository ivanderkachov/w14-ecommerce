import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_RATES = 'ADD_RATES'
const UPDATE_CURRENCY = 'UPDATE_CURRENCY'
const SORT_GOODS = 'SORT_GOODS'


const initialState = {
  goods: [],
  rates: {},
  currency: 'USD'

}

export function getProducts() {
  return (dispatch) => {
    return axios('/api/v1/goods').then(({ data }) => {
      dispatch({
        type: GET_PRODUCTS,
        goods: data
      })
    })
  }
}
export function addRates() {
  return (dispatch) => {
    return axios('/api/v1/rates').then(({ data }) => {
      dispatch({
        type: ADD_RATES,
        rates: data
      })
    })
  }
}
export function updateCurrency(rate) {
  return {
    type: UPDATE_CURRENCY,
    currency: rate
  }
}

export function sortGoods(type,direction) {
  return (dispatch) => {
    return axios(`/api/v1/goods/${type}/${direction}`).then(({ data }) => {
      dispatch({
        type: SORT_GOODS,
        goods: data
      })
    })
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        goods: action.goods
      }
    }
    case ADD_RATES: {
      return {
        ...state,
        rates: action.rates
      }
    }
    case UPDATE_CURRENCY: {
      return {
        ...state,
        currency: action.currency
      }
    }
    case SORT_GOODS: {
      return {
        ...state,
        goods: action.goods
      }
    }
    default:
      return state
  }
}
