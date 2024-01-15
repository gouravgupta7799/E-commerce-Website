import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="text-light py-5" style={{ backgroundColor: '#007bff' }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} className="text-center">
            <div>
              <h1> The Generics</h1>
            </div>
          </Col>
          <Col xs={12} md={10} className="text-center">
            <ul className="list-inline align-items-center" >
              <li className="list-inline-item">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">

                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">

                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">

                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;