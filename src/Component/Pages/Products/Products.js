import React, { useContext } from 'react';
//import Card from '../UI/Card/Card';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from '../../ContextStore/Cart-Context';
import { Link } from 'react-router-dom';

const Products = [
  {
    id: 'p1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 'p2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 'p3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 'p4',
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
        <Button as={Link} to={`/singleproduct/${product.id}`}>show product</Button>
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