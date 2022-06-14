import axios from 'axios'
import { LOG_CHANGE_CURRENCY, LOG_SORT_ITEMS, LOG_DELETE } from '../middleware/logs'

const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_RATES = 'ADD_RATES'
const UPDATE_CURRENCY = 'UPDATE_CURRENCY'
const SORT_GOODS = 'SORT_GOODS'


const initialState = {
  goods: {},
  rates: {},
  currency: 'USD',
  sort: {
    type: 'price',
    direction: 'a-z'
  }

}

export function getProducts() {
  return (dispatch) => {
    return axios('/api/v1/goods').then(({ data }) => {
      const arrObj = data.reduce((acc, prod) => {
        return {...acc, [prod.id]:prod}
      },{})
      dispatch({
        type: GET_PRODUCTS,
        goods: arrObj
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
export function deleteLogs() {
  return (dispatch) => {
      dispatch({
        type: LOG_DELETE
      })
    }
  }
  
export function updateCurrency(rate) {
  return (dispatch, getState) => {
    const lastCurrency = getState().products.currency
    dispatch({
    type: UPDATE_CURRENCY,
    currency: rate
    })
    dispatch({
      type: LOG_CHANGE_CURRENCY,
      payload: {
        lastCurrency,
        newCurrency: rate
      }
    })
  }
}

export function sortGoods(sortType,sortDirection) {
  return (dispatch) => {
    return axios(`/api/v1/goods/${sortType}/${sortDirection}`).then(({ data }) => {
      const arrObj = data.reduce((acc, prod) => {
        return { ...acc, [prod.id]: prod }
      }, {})
      dispatch({
        type: GET_PRODUCTS,
        goods: arrObj
      })
      dispatch({
        type: SORT_GOODS,
        sortType,
        sortDirection
      })
      dispatch({
        type: LOG_SORT_ITEMS,
        payload: {
          sortType}
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
        sort: {
          type: action.sortType,
          direction: action.sortDirection
        }
      }
    }
    default:
      return state
  }
}
