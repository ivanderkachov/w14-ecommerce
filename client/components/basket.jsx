import React from 'react'
import { useSelector } from 'react-redux'

import Header from './header'
import ProductInBasket from './product-in-basket'

const Basket = () => {
  const basketGoods = useSelector((store) => store.basket.basketGoods)

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-wrap h-screen">
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
