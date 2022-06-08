import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './header'
import Product from './product'

import { getProducts, addRates } from '../redux/reducers/products'

const Main = () => {

  const basketGoods = useSelector((store) => store.basket.basketGoods)
  const products = useSelector((store) => store.products.goods)
  const currency = useSelector((store) => store.products.currency)
  const rates = useSelector((store) => store.products.rates)

  const totalAmount = Object.keys(basketGoods).map((good) => {
    let counter = 0
    counter += products[good].price * basketGoods[good] * rates[currency]
    return counter
  })
  const globalAmount = totalAmount.reduce((acc, rec) => {
    return acc + rec
  }, 0).toFixed(2)

  const dispatch = useDispatch()
  const goods = useSelector((store) => store.products.goods)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(addRates())
  }, [])
  return (
    <div className="">
      <Header totalAmount = {globalAmount}/>
      <div>
        <div className="flex flex-wrap h-screen">
          {Object.entries(goods).map((good) => {
            return (
              <div key={good[0]}>
                <Product good={good[1]} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
