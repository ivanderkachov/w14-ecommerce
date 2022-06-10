import React from 'react'
import { useSelector } from 'react-redux'

import Header from './header'
import ProductInBasket from './product-in-basket'



const Basket = () => {
  const basketGoods = useSelector((store) => store.basket.basketGoods)
  const products = useSelector((store) => store.products.goods)
  const totalAmount = useSelector((store) => store.basket.amount)

  const sortedGoods = Object.keys(products)
  const sortedBasket = Object.keys(basketGoods).sort((a,b) => sortedGoods.indexOf(a) - sortedGoods.indexOf(b))

  return (
    <div className="flex flex-col items-center h-screen">
      <Header />
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
        {totalAmount}
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
