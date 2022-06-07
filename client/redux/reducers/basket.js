const initialState = {
  basketGoods: {}
}

const removeProperty = prop => ({ [prop]: _, ...rest}) => rest

const ADD_PRODUCTS = 'ADD_PRODUCTS'
const REMOVE_PRODUCTS = 'REMOVE_PRODUCTS'

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS: {
      return {
        ...state,
        basketGoods: action.basketGoods
      }
    }
    case REMOVE_PRODUCTS: {
      return {
        ...state,
        basketGoods: action.basketGoods
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
    const newItemInBasket = typeof basket?.[itemId] === 'undefined'
      ? { ...basket, [itemId]: 1}
      : { ...basket, [itemId]: basket[itemId] + 1}
    dispatch({
      type: ADD_PRODUCTS,
      basketGoods: newItemInBasket
  })
  }
}
export function removeProducts(itemId) {
  return (dispatch, getState) => {
    const store = getState()
    const basket = store.basket.basketGoods
    const removeId = removeProperty(`${itemId}`)
    const newBasket = removeId(basket)
    const removeItem =
      (basket[itemId] > 1)
        ? { ...basket, [itemId]: basket[itemId] - 1 }
        : newBasket
    dispatch({
      type: REMOVE_PRODUCTS,
      basketGoods: removeItem
    })
  }
}