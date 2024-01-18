import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CartContext } from '../../ContextStore/Cart-Context';
import classes from './SingleProduct.module.css'

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


export default function SingleProduct() {
  const prarams = useParams()
  const prod = Products.filter(product => { return (prarams.prodId === product.id) })

  const CartCtx = useContext(CartContext);
  function addCartHendler(item) {
    CartCtx.addToCart({ ...item, quantity: 1 })
  }

  return (
    <React.Fragment>
      <div className="products">
        <Card>
          <Card.Img variant="top" src={prod[0].imageUrl} alt={prod[0].title} className={classes['img-style']} />
          <Card.Body>
            <Card.Title>{prod[0].title}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto', padding: '10px' }}>
                <h1 style={{ margin: '0 10px' }}>
                  ${prod[0].price}
                </h1>
                <h6 className={classes['price-text-discount-cut']}> $1,499</h6>
                <h6 className={classes['price-text-discount']}>80% off</h6>
              </div>
              <div>4 Days Delivery</div>
            </Card.Subtitle>
            <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
              <Card.Img variant="top" src={Products[0].imageUrl} alt={Products[0].title} className={classes['alter-img-style']} />
              <Card.Img variant="top" src={Products[1].imageUrl} alt={Products[1].title} className={classes['alter-img-style']} />
              <Card.Img variant="top" src={Products[2].imageUrl} alt={Products[2].title} className={classes['alter-img-style']} />
              <Card.Img variant="top" src={Products[3].imageUrl} alt={Products[3].title} className={classes['alter-img-style']} />
            </div>
          </Card.Body>

          <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}>
            <h5 style={{ margin: '20px' }}>container size</h5>
            <div className={classes['product-container-size']}>S</div>
            <div className={classes['product-container-size']}>M</div>
            <div className={classes['product-container-size']}>L</div>
          </div>
        </Card>
        <Button onClick={() => addCartHendler(prod[0])} >add to cart</Button>
      </div>
      <br />
      <div>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h3 style={{ padding: '0 100px' }}>Ratings & Reviews</h3>
          <p >
            <h5 style={{ background: 'green', color: 'white', borderRadius: '40px', width: 'fit-content', padding: '5px 10px' }}>4⭐</h5>
            415,035 ratings and 1,440 reviews</p>
        </span>


        <div className={classes['comments']}>
          <div style={{display:'flex'}}>
            <h6 className={classes['personal-comment']}>4⭐</h6>
            <h6>love it💕</h6>
          </div>
          <img src={Products[0].imageUrl} alt={Products[0].title} style={{ width: '50px', margin: '10px' }} />
          <div>
            <span style={{margin:'3px',fontSize:'smaller'}}>prayagraj</span>
            <span style={{margin:'3px',fontSize:'smaller'}}>jan2020</span>
          </div>
          <p style={{ fontSize: '10px' }}>Certified Buyer, Bhubaneswar</p>
        </div>

        <div className={classes['comments']}>
          <div style={{ display: 'flex' }}>
            <h6 className={classes['personal-comment']}>4⭐</h6>
            <h6>really like this</h6>
          </div>
          <img src={Products[0].imageUrl} alt={Products[0].title} style={{ width: '50px', margin: '10px' }} />
          <div>
            <span style={{margin:'3px',fontSize:'smaller'}} >aman</span>
            <span style={{margin:'3px',fontSize:'smaller'}}>match2023</span>
          </div>
          <p style={{ fontSize: '10px' }}>Certified Certified Buyer, Bengaluru</p>
        </div>

        <div className={classes['comments']}>
          <div style={{ display: 'flex' }}>
            <h6 className={classes['personal-comment']}>5⭐</h6>
            <h6>nice💕</h6>
          </div>
          <img src={Products[0].imageUrl} alt={Products[1].title} style={{ width: '50px', margin: '10px' }} />
          <div>
            <span style={{margin:'3px',fontSize:'smaller'}}>naveen</span>
            <span style={{margin:'3px',fontSize:'smaller'}}>sep2021</span>
          </div>
          <p style={{ fontSize: '10px' }}>Certified Buyer, Rohtas District</p>
        </div>



      </div>
    </React.Fragment>
  )
}
