import React from 'react'
import { useSelector } from 'react-redux'

const ProductInBasket = (props) => {
  const goods = useSelector((store) => store.products.goods)
  const currency = useSelector((store) => store.products.currency)
  const rates = useSelector((store) => store.products.rates)
  const amount = useSelector((store) => store.basket.basketGoods[goods[props.good].id])
  return (
    <div className="product  border w-screen" >
      <img src={goods[props.good].image} alt="Img" className="product__image" />
      <div className="product__price"> {(goods[props.good].price * rates[currency]).toFixed(2)}</div>
      <div className="currency">{currency}</div>
      <div className="product__title">{goods[props.good].title}</div>
      <div className="product__product-amount"> {amount} </div>
    </div>
  )
}

ProductInBasket.propTypes = {}

export default React.memo(ProductInBasket)
