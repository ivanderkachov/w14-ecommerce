const initialState = {
  basketGoods: {}
}

const ADD_PRODUCTS = 'ADD_PRODUCTS'

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS: {
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