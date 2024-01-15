import React, { useContext } from 'react';
//import Card from '../UI/Card/Card';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from '../ContextStore/Cart-Context';

const Products = [
  {
    id: Math.random(),
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: Math.random(),
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: Math.random(),
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: Math.random(),
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const AvailableProducts = () => {
  const CartCtx = useContext(CartContext);

  function addCartHendler(item) {
    CartCtx.addToCart({ ...item, quantity: 1 })
  }
  
  const availableProducts = Products.map((product) => (
    <Col key={product.id} sm={4}>
      <Card className='shadow-lg'>
        <Card.Body style={{ width: 'fit-content' }}>
          <img src={product.imageUrl} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <Button varient='success' onClick={() => { addCartHendler(product) }}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>

  ));

  return (
    <section>
      <div>
        <Container className='mt-3'>
          <Row>
            {availableProducts}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default AvailableProducts;