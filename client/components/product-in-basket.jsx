import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeProducts } from '../redux/reducers/basket'

const ProductInBasket = (props) => {
  const dispatch = useDispatch()
  const goods = useSelector((store) => store.products.goods)
  const currency = useSelector((store) => store.products.currency)
  const rates = useSelector((store) => store.products.rates)
  const amount = useSelector((store) => store.basket.basketGoods[goods[props.good].id])
  return (
    <div className="product  border flex items-center space-x-10" >
      <img src={goods[props.good].image} alt="Img" className="product__image h-8 w-8" />
      <div className="product__title">{goods[props.good].title}</div>
      <div>
      <div className="product__price"> {(goods[props.good].price * rates[currency]).toFixed(2)}</div>
      <div className="currency">{currency}</div>
      </div>
      <div className="product__product-amount"> {amount} </div>
      <div className="product__product-amount"> {(amount*(goods[props.good].price * rates[currency])).toFixed(2)} </div>
      <button type="button" className="border p-2" onClick = {() => {dispatch(removeProducts(props.good))}}>
        remove
      </button>
    </div>
  )
}

ProductInBasket.propTypes = {}

export default React.memo(ProductInBasket)
