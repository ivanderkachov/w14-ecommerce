import React from 'react'
import { useSelector } from 'react-redux'

import Header from './header'




const Logs = () => {

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
