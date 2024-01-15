import React, { useState } from 'react'
import { CartContext } from './Cart-Context'


export default function CartProvider(props) {

  const [items, updateItems] = useState([])
  const [total, updateTotal] = useState(0)

  function addToCartHendler(item) {
    console.log('addToCartHendler')
    const existingItemIndex = items.findIndex((i) => i.id === item.id)

    if (existingItemIndex === -1) {
      updateItems([...items, item]);
    } else {
      const updatedItem = [...items];
      updatedItem[existingItemIndex].quantity = Number(updatedItem[existingItemIndex].quantity) + 1;
    }

    let price = item.price;
    updateTotal(total + price);
  }

  function deleteFromCartHendler(id) {
    const existingIndex = items.findIndex((i) => i.id === id)

    let updatedItem = { ...items }
    if (updatedItem[existingIndex].quantity > 1) {
      updatedItem[existingIndex].quantity = Number(updatedItem[existingIndex].quantity) - 1;
    } else {
      items.splice(existingIndex, 1)
      updateItems(items);
    }

    let price = updatedItem[existingIndex].price;
    updateTotal(total - price);
  }

  let cartcontext = {
    cartItems: items,
    TotalPrice: total,
    addToCart: addToCartHendler,
    deleteFromCart: deleteFromCartHendler,
  }
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>

  )
}
