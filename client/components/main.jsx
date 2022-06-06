import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './header'
import Product from './product'

import { getProducts, addRates } from '../redux/reducers/products'

const Main = () => {
  const dispatch = useDispatch()
  const goods = useSelector((store) => store.products.goods)

  useEffect(() => {
    dispatch(getProducts())
    dispatch(addRates())
  }, [])
  return (
    <div className="">
      <Header />
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
