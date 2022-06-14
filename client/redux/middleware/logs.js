import axios from 'axios'

export const LOG_CHANGE_CURRENCY = 'LOG_CHANGE_CURRENCY'
export const LOG_ADD_ITEM_TO_BASKET = 'LOG_ADD_ITEM_TO_BASKET'
export const LOG_REMOVE_ITEM_FROM_BASKET = 'LOG_REMOVE_ITEM_FROM_BASKET'
export const LOG_SORT_ITEMS = 'LOG_SORT_ITEMS'
export const LOG_DELETE = 'LOG_DELETE'


const logs = () => {
  return () => (next) => (action) => {
    switch (action.type) {
      case LOG_CHANGE_CURRENCY: {
        axios
          .post('/api/v1/logs', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: {
              text: `change currency from ${action.payload.lastCurrency} to ${action.payload.newCurrency}`
            }
          })
          .then((data) => {
            console.log(JSON.stringify(data))
          })
          .catch((err) => {
            console.log(err)
          })
        break
      }
      case LOG_ADD_ITEM_TO_BASKET: {
        axios
          .post('/api/v1/logs', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: {
              text: `Add ${action.payload.itemInBasket} to Basket`
            }
          })
          .then((data) => {
            console.log(JSON.stringify(data))
          })
          .catch((err) => {
            console.log(err)
          })
        break
      }
      case LOG_REMOVE_ITEM_FROM_BASKET: {
        axios
          .post('/api/v1/logs', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: {
              text: `Remove ${action.payload.itemInBasket} from Basket`
            }
          })
          .then((data) => {
            console.log(JSON.stringify(data))
          })
          .catch((err) => {
            console.log(err)
          })
        break
      }
      case LOG_SORT_ITEMS: {
        axios
          .post('/api/v1/logs', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: {
              text: `Sort items by ${action.payload.sortType}`
            }
          })
          .then((data) => {
            console.log(JSON.stringify(data))
          })
          .catch((err) => {
            console.log(err)
          })
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
