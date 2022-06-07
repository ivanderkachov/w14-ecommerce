import React from 'react'
import { useSelector } from 'react-redux'

import Header from './header'
import ProductInBasket from './product-in-basket'

const Basket = () => {
  const basketGoods = useSelector((store) => store.basket.basketGoods)

  return (
    <div className = "flex flex-col items-center h-screen">
      <Header />
      <div className="flex p-1">
        <div className="flex flex-wrap space-x-1 items-center h-screen p-20">
          {Object.keys(basketGoods).map((good) => {
            return (
              <div key={good}>
                <ProductInBasket good={good} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
