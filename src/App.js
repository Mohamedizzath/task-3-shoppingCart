import './App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function App() {
  const [totalCount, setTotalCount] = useState(0);
  const [products, setProducts] = useState([
    {title: 'Taco Seasoning', count: 0, price: 2.25},
    {title: 'Pinto Beans', count: 0, price: 1.99},
    {title: 'Sour Cream', count: 0, price: 3.5},
  ]);


  const handleClickAdd = (index) => {
    let tempProduts = products.slice();
    tempProduts[index].count += 1;
    setProducts(tempProduts);
    updateTotal();
  } 

  const handleClickMin = (index) => {
    let tempProduts = products.slice();
    if(tempProduts[index].count > 0){
     tempProduts[index].count -= 1;
    }else{
      tempProduts[index].count = 0;
    }
    setProducts(tempProduts);
    updateTotal();

  } 

  const updateTotal = () => {
    let total = 0;
    for(var i = 0; i < products.length; i++){
      total += products[i].count * products[i].price;
    }
    setTotalCount(total);
  }

  return (
    <Container>
    <br/>
    <Row className="align-middle">
      <Col md={{ span: 6, offset: 3 }}>
        <Card className="card-background">
          <Card.Body className="card-background">
            <Card.Title className="center-text fonts"><h1>Shopping Cart</h1></Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formShoppingCart">
                {
                  products.map((product) => (
                  <div className="add-bottom-margin">
                    <Form.Label className="fonts"><h3 className="remove-bottom-margin">Name: {product.title}</h3></Form.Label>
                    <h4 className="fonts">Price: {product.price}$</h4>
                    <Button type="button" className="button button-rework" onClick={() => {handleClickMin(products.indexOf(product))}}>
                    -
                    </Button>
                    <Button type="submit" className="button button-rework disable-button-rework" disabled>
                      {product.count}
                    </Button>
                    <Button type="button" className="button button-rework" onClick={() => {handleClickAdd(products.indexOf(product))}}>
                    +
                    </Button>
                    <hr className="white-hr"/>
                  </div>
                  ))}
              </Form.Group>
              <br />
              <Button type="submit" className="button button-rework center" disabled>
                Total amount : ${totalCount.toFixed(2)}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
}

export default App;
