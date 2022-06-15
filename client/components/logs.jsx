import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './header'
import { viewLogs } from '../redux/reducers/products'



const Logs = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(viewLogs())
  }, [])
  const logs = useSelector((store) => store.products.logs)
  return (
    <div className="flex w-screen space-y-10">
      <Header />
      <div className="flex flex-row flex-wrap h-screen w-30 h-5 p-10">
        {logs.map((item, index) => {
          return (
            <div key={item}>
              {index} {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}
Logs.propTypes = {}

export default React.memo(Logs)
