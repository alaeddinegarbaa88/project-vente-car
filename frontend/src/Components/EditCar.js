import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { editCar } from "../Api/CarApi";

const EditCar = () => {

  const Cars = useSelector(state =>state.Car)
  const navigate = useNavigate()
  const {id} = useParams();
  const Car = Cars.find(e =>e._id ===id);


  
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [capacity, setCapacity] = useState("");

  const handleEdit = (Car) => {
    
    toast.promise(editCar(id,Car), {
      loading: "Editing...",
      success: <b>Car Edited!</b>,
      error: <b>Could not Edit.</b>,
    });
    navigate("/");
  };
  


  return (
    <div>
      <Toaster position="top-right" />
      <h1 >Edit Car</h1>
      <Container style={{ margin: "40px" }}>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form novalidate>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
                  <Form.Control
                  defaultValue={Car.name}
                    onChange={(e) => setName(e.target.value)}
                    aria-label="Default select example"
                    type="text"
                    placeholder="Place the name of car"
                  />
                    
                  
                </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>image</Form.Label>
                <Form.Control                
                  onChange={(e) => setImage(e.target.value)}
                  defaultValue={Car.image}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  defaultValue={Car.price}
                  required
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>FuelType</Form.Label>
                <Form.Select
                  onChange={(e) => setFuelType(e.target.value)}
                  aria-label="Default select "
                >
                  <option>Choose Category </option>
                  <option  value="Petrol">Petrol</option>
                  <option  value="Gasoil">Gasoil</option>
                  
                  defaultValue={Car.fuelType}
                  required
                
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Capacity</Form.Label>
                <Form.Control
                  onChange={(e) => setCapacity(e.target.value)}
                  type="number"
                  defaultValue={Car.capacity}
                  required
                />
              </Form.Group>
              <Button  variant="primary" onClick={() => {handleEdit({ name, image, fuelType, capacity, price })}}>
                Edit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditCar;
