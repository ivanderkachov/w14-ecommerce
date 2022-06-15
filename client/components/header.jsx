import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { updateCurrency, sortGoods, deleteLogs, viewLogs } from '../redux/reducers/products'

import { history } from '../redux'

const Header = () => {
  const dispatch = useDispatch()
  const totalAmount = useSelector((store) => store.basket.amount)

  let click = true
  const sortDir = () => {
    if (click) {
      click = false
      return 'a-z'
    }
    click = true
    return 'z-a'
  }

  return (
    <nav className="flex flex-col justify-center justify-between bg-blue-800 font-bold text-white h-20 w-screen fixed select-none ">
      <Link to="/">
        <div id="brand-name" className="border flex justify-center">
          Shop
        </div>
      </Link>
      <div className="flex justify-between">
        <div>
          <button
            type="button"
            className="border p-2"
            onClick={(e) => dispatch(updateCurrency(e.target.textContent))}
          >
            USD
          </button>
          <button
            type="button"
            className="border p-2"
            onClick={(e) => dispatch(updateCurrency(e.target.textContent))}
          >
            EUR
          </button>
          <button
            type="button"
            className="border p-2"
            onClick={(e) => dispatch(updateCurrency(e.target.textContent))}
          >
            CAD
          </button>
        </div>
        <div>
          <button
            type="button"
            id="sort-price"
            className="border p-2"
            onClick={() => dispatch(sortGoods('price', sortDir()))}
          >
            sort-price
          </button>
          <button
            type="button"
            id="sort-name"
            className="border p-2"
            onClick={() => dispatch(sortGoods('title', sortDir()))}
          >
            sort-name
          </button>
        </div>
        <div className="flex ">
          <button
            type="button"
            id="order-count"
            className="border p-2"
            onClick={() => history.push('/basket')}
          >
            Basket {totalAmount}
          </button>
          <button
            type="button"
            id="view-logs-button"
            className="border p-2"
            onClick={() => {
              dispatch(viewLogs())
              history.push('/logs')}}
          >
            View Logs
          </button>
          <button
            type="button"
            id="delete-logs-button"
            className="border p-2"
            onClick={() => {
              dispatch(deleteLogs())}}
          >
            Delete Logs
          </button>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
