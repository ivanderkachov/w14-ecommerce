import React from 'react'
import { useSelector } from 'react-redux'

import Header from './header'
import ProductInBasket from './product-in-basket'



const Basket = () => {
  const basketGoods = useSelector((store) => store.basket.basketGoods)
  const products = useSelector((store) => store.products.goods)
  const currency = useSelector((store) => store.products.currency)
  const rates = useSelector((store) => store.products.rates)

    const totalAmount = Object.keys(basketGoods).map((good) => {
      let counter = 0
      counter += (products[good].price * basketGoods[good] * rates[currency])
      return counter
    })
    const globalAmount = totalAmount.reduce((acc, rec) => {
      return acc + rec
    }, 0).toFixed(2)


  const sortedGoods = Object.keys(products)
  const sortedBasket = Object.keys(basketGoods).sort((a,b) => sortedGoods.indexOf(a) - sortedGoods.indexOf(b))


  return (
    <div className="flex flex-col items-center h-screen">
      <Header totalAmount = {globalAmount}/>
      <div className="flex p-1">
        <div className="flex flex-wrap space-x-1 p-20">
          {sortedBasket.map((good) => {
            return (
              <div key={good}>
                <ProductInBasket good={good} />
              </div>
            )
          })}
        </div>
      </div>
      <div>
        {globalAmount}
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
