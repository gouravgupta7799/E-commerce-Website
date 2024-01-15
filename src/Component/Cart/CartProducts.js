import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CartContext } from '../ContextStore/Cart-Context';

// const cartElements = [
//   {
//     title: 'Colors',
//     price: 100,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//     quantity: 2,
//   },
//   {
//     title: 'Black and white Colors',
//     price: 50,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//     quantity: 3,
//   },
//   {
//     title: 'Yellow and Black Colors',
//     price: 70,
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//     quantity: 1,
//   },
// ];

const Cart = () => {
  const CartCtx = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleRemoveItem = (id) => {
    CartCtx.deleteFromCart(id)
  };

  let total = 0;
  CartCtx.cartItems.forEach(it => {
    total += it.quantity
  })

  return (

    <div className="d-flex align-items-center" >
      <span className="badge bg-primary" onClick={handleShow}>
        <h5>🛒</h5>
        {total}

      </span>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {CartCtx.cartItems.map((item) => (
            <div className='border m-1 p-1'>
              <p>{item.title}</p>
              <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center">
                  <img src={item.imageUrl} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />
                  <div>
                    <p>Price: ${item.price}</p>
                  </div>
                  <div className="m-2">
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <p>Total Price: ${item.price * item.quantity}</p>
                  </div>
                  <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-between w-100">
            <p>Total: ${CartCtx.TotalPrice}</p>
            <Button variant="success" onClick={() => console.log('Add Purchase clicked')}>
              Add Purchase
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )

}

export default Cart;