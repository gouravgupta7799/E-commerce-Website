import React, { useState } from 'react'
import { CartContext } from './Cart-Context'
import { useEffect } from 'react'


export default function CartProvider(props) {

  const initialEmail = localStorage.getItem('email');
  const [items, updateItems] = useState([])
  const [total, updateTotal] = useState(0)
  const [email, updateEmail] = useState(initialEmail)

  function addEmailHandler(eml) {
    updateEmail(eml.split('@')[0])
    localStorage.setItem('email', (eml.split('@')[0]))
  }


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
    postCartItems([...items], total + price)
  }

  async function postCartItems(items, total) {
    let url = 'https://crudcrud.com/api/26d2c507d07947468c98605ca6408042/' + email

    const data = await fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          items: items,
          total: total,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    // console.log(data)
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


  useEffect(() => {
    const getCartItems = async () => {
      try {
        let url = 'https://crudcrud.com/api/26d2c507d07947468c98605ca6408042/' + email

        const data = await fetch(url,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        let res = await data.json()
        let k = [...res]
        updateItems(k[k.length - 1].items);
        updateTotal(k[k.length - 1].total);
        console.log(k);
      }
      catch (er) {
        console.log(er)
      }
    }
    getCartItems()
  }, [])


  let cartcontext = {
    cartItems: items,
    TotalPrice: total,
    emailId: email,
    addToCart: addToCartHendler,
    deleteFromCart: deleteFromCartHendler,
    addEmail: addEmailHandler,
  }
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>

  )
}
