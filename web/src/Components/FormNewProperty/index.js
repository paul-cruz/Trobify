import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FormNewProperty() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [land, setLand] = useState("");
  const [built, setBuilt] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [kitchens, setKitchens] = useState("");
  const [garages, setGarages] = useState("");
  const [line1, setLine1] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [floors, setFloors] = useState("");
  const [name, setName] = useState("");
  const [tel1, setTel1] = useState("");
  const [tel2, setTel2] = useState("");

  const handleSubmit = async(e) =>{
    e.preventDefault();
  }


  return (
    <div align = "center">
      <Card border="dark" bg="light" text = "dark" style={{ width: "80%" }}>
      <Card.Header as="h4">Ingresa la información del inmueble</Card.Header>
      <Card.Body>
        <Form>
          <Card bg="light" text = "dark">
            <Card.Header as="h5">Información</Card.Header>
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="txtTitle" md="8">
                  <Form.Label column="sm">Encabezado</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribe el encabezado de tu publicación"
                    onChange = {(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="txtPrice" md="4">
                  <Form.Label column="sm" txt="dark">
                    Precio
                  </Form.Label>
                  <InputGroup className="mb-3" controlId="txtPrice" md="4">
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Precio del inmueble"
                      type="number"
                      md="4"
                      onChange = {(e) =>setPrice(e.target.value)}
                    />
                    <InputGroup.Append>
                      <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
              </Form.Row>
            </Card.Body>
          </Card>
          <Card bg="light" text = "dark">
            <Card.Header as="h5">Características</Card.Header>
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="txtLand" md="4">
                  <Form.Control type="number" placeholder="Dimension" onChange = {(e) => setLand(e.target.value)}/>
                  <Form.Label column="sm">Dimension del terreno</Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="txtBuilt" md="4">
                  <Form.Control type="number" placeholder="Dimension" onChange = {(e) =>setBuilt(e.target.value)}/>
                  <Form.Label column="sm">
                    Dimension de la construccion
                  </Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="txtRooms" md="4">
                  <Form.Control type="number" placeholder="Habitaciones" onChange = {(e)=>setRooms(e.target.value)} />
                  <Form.Label column="sm">Numero de habitaciones</Form.Label>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="txtBathrooms" md="4">
                  <Form.Control type="number" placeholder="Baños" onChange = {(e)=>setBathrooms(e.target.value)}/>
                  <Form.Label column="sm">Numero de baños</Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="txtKitchens" md="4">
                  <Form.Control type="number" placeholder="Cocinas" onChange = {(e)=>setKitchens(e.target.value)} />
                  <Form.Label column="sm">Numero de cocinas</Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="txtGarage" md="4">
                  <Form.Control type="number" placeholder="Garages" onChange = {(e)=>setGarages(e.target.value)}/>
                  <Form.Label column="sm">Numero de garages</Form.Label>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.File id="images" label="Imagenes del inmueble" custom />
              </Form.Row>
            </Card.Body>
          </Card>
          <Card bg="light" text = "dark">
            <Card.Header as="h5">Dirección</Card.Header>
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="txtLine1">
                  <Form.Control placeholder="Calle, numero y colonia" onChange = {(e)=>setLine1(e.target.value)}/>
                  <Form.Label column="sm">Dirección</Form.Label>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="txtCity">
                  <Form.Control placeholder="Ciudad" onChange = {(e)=>setCity(e.target.value)}/>
                  <Form.Label column="sm">Ciudad</Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="txtState">
                  <Form.Control as="select" defaultValue="Seleccionar..." onChange = {(e)=>setState(e.target.value)}>
                    <option>Seleccionar...</option>
                    <option>...</option>
                  </Form.Control>
                  <Form.Label column="sm">Estado</Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="txtZip">
                  <Form.Control placeholder="CP" onChange = {(e)=>setZip(e.target.value)}/>
                  <Form.Label column="sm">Codigo postal</Form.Label>
                </Form.Group>
              </Form.Row>
            </Card.Body>
          </Card>
          <Card bg="light" text = "dark">
            <Card.Header as="h5">Ubicación</Card.Header>
          </Card>
          <Card bg="light" text = "dark">
            <Card.Header as="h5">Descripción</Card.Header>
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="txtDescription">
                  <Form.Label column="sm">Descripción del inmueble</Form.Label>
                  <InputGroup>
                    <FormControl
                      as="textarea"
                      aria-label="With textarea"
                      placeholder="Realiza una breve descripcion del inmueble"
                      onChange = {(e)=>setDescription(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="txtType">
                  <Form.Control type="text" placeholder="Ej., Casa" onChange = {(e)=>setType(e.target.value)}/>
                  <Form.Label column="sm">Tipo de inmueble</Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="txtAge">
                  <Form.Control type="number" placeholder="Antigüedad" onChange = {(e)=>setAge(e.target.value)}/>
                  <Form.Label column="sm">Antigüedad del inueble</Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="txtFloors">
                  <Form.Control type="number" placeholder="Pisos" onChange = {(e)=>setFloors(e.target.value)} />
                  <Form.Label column="sm">Numero de pisos</Form.Label>
                </Form.Group>
              </Form.Row>
            </Card.Body>
          </Card>
          <Card bg="light" text = "dark">
            <Card.Header as="h5">Contacto</Card.Header>
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="txtName">
                  <Form.Control type="text" placeholder="Nombre" onChange = {(e)=>setName(e.target.value)}/>
                  <Form.Label column="sm">Nombre de contacto</Form.Label>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="txtTel1">
                  <Form.Control type="phone" placeholder="Telefono" onChange = {(e)=>setTel1(e.target.value)} />
                  <Form.Label column="sm">Telefono de contacto</Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="txtTel2">
                  <Form.Control type="phone" placeholder="Telefono" onChange = {(e)=>setTel2(e.target.value)} />
                  <Form.Label column="sm">Telefono secundario</Form.Label>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Button variant="outline-primary" type="submit" size="lg" block>
                  Agregar nuevo inmueble
                </Button>
              </Form.Row>
            </Card.Body>
          </Card>
        </Form>
      </Card.Body>
    </Card>

    </div>
      );
}
