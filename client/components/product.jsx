import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addProducts } from '../redux/reducers/basket'

const Product = (props) => {
  const dispatch = useDispatch()
  const currency = useSelector((store) => store.products.currency)
  const rates = useSelector((store) => store.products.rates)
  const amount = useSelector((store) => store.basket.basketGoods)
  return (
    <div className="card bg-indigo-800 font-bold text-white rounded-lg border shadow-lg p-10">
      <img src={props.good.image} alt="Img" className="card__image" />
      <div className="card__price"> {(props.good.price*rates[currency]).toFixed(2)}</div>
      <div className="currency">{currency}</div>
      <div className="card__title">{props.good.title}</div>
      <div className="card__product-amount"> {amount[props.good.id]} </div>
      <button type="button" className="border p-2" onClick = {() => {dispatch(addProducts(props.good.id))}}>
        add
      </button>
    </div>
  )
}

Product.propTypes = {}

export default React.memo(Product)
