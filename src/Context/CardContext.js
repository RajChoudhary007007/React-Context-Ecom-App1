import React from 'react'

const CardContext = React.createContext({
  cartList: [],
  addCardItem: {},
  deleteCardItem: {},
})
export default CardContext
