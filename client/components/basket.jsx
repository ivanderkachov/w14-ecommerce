import React from 'react'

import Header from './header'

const Basket = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center bg-blue-600 h-screen">
        <div className="text-black">Basket</div>
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
