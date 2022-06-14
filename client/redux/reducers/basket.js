import { LOG_ADD_ITEM_TO_BASKET, LOG_REMOVE_ITEM_FROM_BASKET } from '../middleware/logs'


const initialState = {
  basketGoods: {},
  amount: 0
}

const removeProperty =
  (prop) =>
  ({ [prop]: _, ...rest }) =>
    rest

const ADD_PRODUCTS = 'ADD_PRODUCTS'
const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS'

function totalAmount(products1, basketGoods1, rates1, currency1) {
  const totalAmount1 = Object.keys(basketGoods1).map((good) => {
    let counter = 0
    counter += products1[good].price * basketGoods1[good] * rates1[currency1]
    return counter
  })
  const globalAmount = totalAmount1
    .reduce((acc, rec) => {
      return acc + rec
    }, 0)
    .toFixed(2)
  return globalAmount
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS: {
      return {
        ...state,
        basketGoods: action.basketGoods,
        amount: action.amount
      }
    }
    case REMOVE_PRODUCTS: {
      return {
        ...state,
        basketGoods: action.basketGoods,
        amount: action.amount
      }
    }
    default:
      return state
  }
}

export function addProducts(itemId) {
  return (dispatch, getState) => {
    const store = getState()

    const basket = store.basket.basketGoods
    const products1 = store.products.goods
    const rates1 = store.products.rates
    const currency1 = store.products.currency

    const newItemInBasket =
      typeof basket?.[itemId] === 'undefined'
        ? { ...basket, [itemId]: 1 }
        : { ...basket, [itemId]: basket[itemId] + 1 }
    const amount = totalAmount(products1, newItemInBasket, rates1, currency1)
    dispatch({
      type: ADD_PRODUCTS,
      basketGoods: newItemInBasket,
      amount
    })
    dispatch({
      type: LOG_ADD_ITEM_TO_BASKET,
      payload: {
        itemInBasket: products1[itemId].title
      }
    })
  }
}

export function removeProducts(itemId) {
  return (dispatch, getState) => {
    const store = getState()

    const basket = store.basket.basketGoods
    const products1 = store.products.goods
    const rates1 = store.products.rates
    const currency1 = store.products.currency

    const removeId = removeProperty(`${itemId}`)
    const newBasket = removeId(basket)
    const removeItem = basket[itemId] > 1 ? { ...basket, [itemId]: basket[itemId] - 1 } : newBasket
    const amount = totalAmount(products1, removeItem, rates1, currency1)
    dispatch({
      type: REMOVE_PRODUCTS,
      basketGoods: removeItem,
      amount
    })
    dispatch({
      type: LOG_REMOVE_ITEM_FROM_BASKET,
      payload: {
        itemInBasket: products1[itemId].title
      }
    })
  }
}
