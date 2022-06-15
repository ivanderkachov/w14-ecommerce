import axios from 'axios'

export const LOG_CHANGE_CURRENCY = 'LOG_CHANGE_CURRENCY'
export const LOG_ADD_ITEM_TO_BASKET = 'LOG_ADD_ITEM_TO_BASKET'
export const LOG_REMOVE_ITEM_FROM_BASKET = 'LOG_REMOVE_ITEM_FROM_BASKET'
export const LOG_SORT_ITEMS = 'LOG_SORT_ITEMS'
export const LOG_DELETE = 'LOG_DELETE'
export const LOG_LOCATION_CHANGE = '@@router/LOCATION_CHANGE'

function toServer(text1) {
  const textWithDate = `${text1}_${new Date().toISOString()}`
  axios
    .post('/api/v1/logs', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: {
        text: textWithDate
      }
    })
    .then((data) => {
      console.log(JSON.stringify(data))
    })
    .catch((err) => {
      console.log(err)
    })
}

const logs = () => {
  return () => (next) => (action) => {
    switch (action.type) {
      case LOG_CHANGE_CURRENCY: {
        toServer(
          `change currency from ${action.payload.lastCurrency} to ${action.payload.newCurrency}`
        )
        break
      }
      case LOG_ADD_ITEM_TO_BASKET: {
        toServer(`Add ${action.payload.itemInBasket} to Basket`)
        break
      }
      case LOG_REMOVE_ITEM_FROM_BASKET: {
        toServer(`Remove ${action.payload.itemInBasket} from Basket`)
        break
      }
      case LOG_SORT_ITEMS: {
        toServer(`Sort items by ${action.payload.sortType}`)
        break
      }
      case LOG_LOCATION_CHANGE: {
        toServer(`navigate to ${action.payload.location.pathname} page`)
        break
      }
      case LOG_DELETE: {
        axios.delete('/api/v1/deletelogs')
        break
      }
      default:
        return next(action)
    }
    return next(action)
  }
}

export default logs()
