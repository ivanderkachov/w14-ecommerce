import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './header'
import Product from './product'

import { addRates, sortGoods } from '../redux/reducers/products'


const Main = () => {

  const sortedGoods = useSelector((store) => store.products.sort)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(addRates())
    dispatch(sortGoods(sortedGoods.type, sortedGoods.direction))
  }, [])

  const goods = useSelector((store) => store.products.goods)

  return (
    <div className="">
      <Header />
      <div>
        <div className="flex flex-wrap justify-between h-screen p-10">
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
