import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
export default function SearchFilters() {

  const [roomsMin, setRoomsMin] = useState("");
  const [roomsMax, setRoomsMax] = useState("");
  const [builtMin, setBuiltMin] = useState("");
  const [builtMax, setBuiltMax] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [age, setAge] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [garages, setGarages] = useState("");

  const handleSubmit = async (e) => {

  }

  return (
    <Card border="dark" bg="primary" style={{ width: "25%" }} text="light">
      <Card.Header as="h4">Filtros de busqueda</Card.Header>
      <Card.Body>
        <Form>
          <Form.Row>
            <Form.Label>Recámaras</Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="txtRoomsMin">
              <Form.Control as="select" defaultValue="Sin Mínimo" onChange = {(e)=>setRoomsMin(e.target.value)}>
                <option>Sin Mínimo</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4 o mas</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="txtRoomsMax">
              <Form.Control as="select" defaultValue="Sin Máximo" onChange = {(e)=>setRoomsMax(e.target.value)}>
                <option>Sin Máximo</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4 o mas</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label>Superficie m²</Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="txtBuiltMin">
              <Form.Control type="number" placeholder="Sin Mínimo" onChange = {(e)=>setBuiltMin(e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} controlId="txtBuiltMax">
              <Form.Control type="number" placeholder="Sin Máximo" onChange = {(e)=>setBuiltMax(e.target.value)}/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label>Precio</Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="txtPriceMin">
              <Form.Control type="number" placeholder="Desde" onChange = {(e)=>setPriceMin(e.target.value)}/>
            </Form.Group>
            <Form.Group as={Col} controlId="txtPriceMax">
              <Form.Control type="number" placeholder="Hasta" onChange = {(e)=>setPriceMax(e.target.value)}/>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label>Antigüedad</Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="txtAge">
              <Form.Control as="select" defaultValue="Seleccione Antigüedad" onChange = {(e)=>setAge(e.target.value)}>
                <option>Seleccione antigüedad</option>
                <option>En construccion</option>
                <option>A estrenar</option>
                <option>Hasta 5 años</option>
                <option>Entre 5 y 10 años</option>
                <option>Entre 10 y 20 años</option>
                <option>Entre 20 y 50 años</option>
                <option>Mas de 50 años</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label>Baños</Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="txtBathrooms">
              <Form.Control as="select" defaultValue="Elige una opción" onChange = {(e)=>setBathrooms(e.target.value)}>
                <option>Elige una opción</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Label>Estacionamientos</Form.Label>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="txtGarages">
              <Form.Control as="select" defaultValue="Elige una opción" onChange = {(e)=>setGarages(e.target.vaue)}>
                <option>Elige una opción</option>
                <option>Sin</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Button variant="outline-light" type="submit" size="lg" block>
              Aplicar filtros
            </Button>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
}
