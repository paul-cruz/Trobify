import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { newProperty } from "../../Utils/functions";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Loading from '../Loading';

const containerStyle = {
  width: '100%',
  height: '400px'
};

export default function FormNewProperty() {
  const [tittle, setTittle] = useState("");
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
  const [email, setEmail] = useState("");
  const [links, setLinks] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

    const handleEvent = (e) =>{
        setLat(e.latLng.lat);
        setLng(e.latLng.lng);
    }
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ""
    })


  const handleSubmit = async (e) => {
    e.preventDefault();
    const images = links.split(",");
    const property = {
      tittle,
      price,
      features: {
        land,
        built,
        rooms,
        bathrooms,
        kitchens,
        garages,
      },
      address: {
        line1,
        state,
        city,
        zip,
      },
      location: {
        lat,
        lng,
      },
      description,
      type,
      age,
      floors,
      contact: {
        name,
        "phones":[
          tel1,
          tel2,
        ],
        email,
      },
      apoiments:[],
      images,
    };
    newProperty(property).then((res) => {
      if (res.data.msg === "Inserted") {
        alert("Inmueble agregado con exito");
        setTittle("");
        setPrice("");
        setLand("");
        setBuilt("");
        setRooms("");
        setBathrooms("");
        setKitchens("");
        setGarages("");
        setLine1("");
        setCity("");
        setState("");
        setZip("");
        setDescription("");
        setType("");
        setAge("");
        setFloors("");
        setName("");
        setTel1("");
        setTel2("");
      } else {
        alert("Revisa los datos");
      }
    });
  };

  return (
    <div align="center">
      <Card border="dark" bg="light" text="dark" style={{ width: "80%" }}>
        <Card.Header as="h4">Ingresa la información del inmueble</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Card bg="light" text="dark">
              <Card.Header as="h5">Información</Card.Header>
              <Card.Body>
                <Form.Row>
                  <Form.Group as={Col} controlId="txtTittle" md="8">
                    <Form.Label column="sm">Encabezado</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Escribe el encabezado de tu publicación"
                      onChange={(e) => setTittle(e.target.value)}
                      required
                      autoFocus
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
                        onChange={(e) => setPrice(e.target.value)}
                        required
                      />
                      <InputGroup.Append>
                        <InputGroup.Text>.00</InputGroup.Text>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
              </Card.Body>
            </Card>
            <Card bg="light" text="dark">
              <Card.Header as="h5">Características</Card.Header>
              <Card.Body>
                <Form.Row>
                  <Form.Group as={Col} controlId="txtLand" md="4">
                    <Form.Control
                      type="number"
                      placeholder="Dimension"
                      onChange={(e) => setLand(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Dimension del terreno</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="txtBuilt" md="4">
                    <Form.Control
                      type="number"
                      placeholder="Dimension"
                      onChange={(e) => setBuilt(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">
                      Dimension de la construccion
                    </Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="txtRooms" md="4">
                    <Form.Control
                      type="number"
                      placeholder="Habitaciones"
                      onChange={(e) => setRooms(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Numero de habitaciones</Form.Label>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="txtBathrooms" md="4">
                    <Form.Control
                      type="number"
                      placeholder="Baños"
                      onChange={(e) => setBathrooms(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Numero de baños</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="txtKitchens" md="4">
                    <Form.Control
                      type="number"
                      placeholder="Cocinas"
                      onChange={(e) => setKitchens(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Numero de cocinas</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="txtGarage" md="4">
                    <Form.Control
                      type="number"
                      placeholder="Garages"
                      onChange={(e) => setGarages(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Numero de garages</Form.Label>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col} controlId="txtLinks">
                    <Form.Control
                      placeholder="Links de las imagenes separados por ','"
                      onChange={(e) => setLinks(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Imagenes (links)</Form.Label>
                  </Form.Group>
                </Form.Row>
              </Card.Body>
            </Card>
            <Card bg="light" text="dark">
              <Card.Header as="h5">Dirección</Card.Header>
              <Card.Body>
                <Form.Row>
                  <Form.Group as={Col} controlId="txtLine1">
                    <Form.Control
                      placeholder="Calle, numero y colonia"
                      onChange={(e) => setLine1(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Dirección</Form.Label>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="txtCity">
                    <Form.Control
                      placeholder="Ciudad"
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Ciudad</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="txtState">
                    <Form.Control
                      as="select"
                      defaultValue="Seleccionar..."
                      onChange={(e) => setState(e.target.value)}
                      required
                    >
                      <option>Seleccionar...</option>
                      <option>Aguascalientes</option>
                      <option>Baja California</option>
                      <option>Baja California Sur</option>
                      <option>Campeche</option>
                      <option>Chiapas</option>
                      <option>Chihuahua</option>
                      <option>Ciudad de México</option>
                      <option>Coahuila de Zaragoza </option>
                      <option>Colima</option>
                      <option>Durango</option>
                      <option>Guanajuato</option>
                      <option>Guerrero</option>
                      <option>Hidalgo</option>
                      <option>Jalisco</option>
                      <option>México</option>
                      <option>Michoacán de Ocampo</option>
                      <option>Morelos</option>
                      <option>Nayarit</option>
                      <option>Nuevo León</option>
                      <option>Oaxaca</option>
                      <option>Puebla</option>
                      <option>Querétaro</option>
                      <option>Quintana Roo</option>
                      <option>San Luis Potosí</option>
                      <option>Sinaloa</option>
                      <option>Sonora</option>
                      <option>Tabasco</option>
                      <option>Tamaulipas</option>
                      <option>Tlaxcala</option>
                      <option>Veracruz</option>
                      <option>Yucatán</option>
                      <option>Zacatecas</option>
                    </Form.Control>
                    <Form.Label column="sm">Estado</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="txtZip">
                    <Form.Control
                      placeholder="CP"
                      onChange={(e) => setZip(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Codigo postal</Form.Label>
                  </Form.Group>
                </Form.Row>
              </Card.Body>
            </Card>
            <Card bg="light" text="dark">
              <Card.Header as="h5">Ubicación</Card.Header>
              <Card.Body>
                {
                  isLoaded ? 
                    <GoogleMap
                        
                        mapContainerStyle={containerStyle}
                        center={{ lat:19.5041845, lng:-99.1489003 }}
                        zoom={15}
                    >
                        <Marker
                            position={{ lat:19.5041845, lng:-99.1489003 }}
                            draggable = {true}
                            onDrag = {handleEvent}
                            onDragStart = {handleEvent}
                            onDragEnd = {handleEvent}
                        />
                    </GoogleMap >
                 : <Loading />
                }
              </Card.Body>
            </Card>
            <Card bg="light" text="dark">
              <Card.Header as="h5">Descripción</Card.Header>
              <Card.Body>
                <Form.Row>
                  <Form.Group as={Col} controlId="txtDescription">
                    <Form.Label column="sm">
                      Descripción del inmueble
                    </Form.Label>
                    <InputGroup>
                      <FormControl
                        as="textarea"
                        aria-label="With textarea"
                        placeholder="Realiza una breve descripcion del inmueble"
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="txtType">
                    <Form.Control
                      type="text"
                      placeholder="Ej., Casa"
                      onChange={(e) => setType(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Tipo de inmueble</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="txtAge">
                    <Form.Control
                      type="number"
                      placeholder="Antigüedad"
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Antigüedad del inueble</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="txtFloors">
                    <Form.Control
                      type="number"
                      placeholder="Pisos"
                      onChange={(e) => setFloors(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Numero de pisos</Form.Label>
                  </Form.Group>
                </Form.Row>
              </Card.Body>
            </Card>
            <Card bg="light" text="dark">
              <Card.Header as="h5">Contacto</Card.Header>
              <Card.Body>
                <Form.Row>
                  <Form.Group as={Col} controlId="txtName">
                    <Form.Control
                      type="text"
                      placeholder="Nombre"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Nombre de contacto</Form.Label>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="txtTel1">
                    <Form.Control
                      type="phone"
                      placeholder="Telefono"
                      onChange={(e) => setTel1(e.target.value)}
                      required
                    />
                    <Form.Label column="sm">Telefono de contacto</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="txtTel2">
                    <Form.Control
                      type="phone"
                      placeholder="Telefono"
                      onChange={(e) => setTel2(e.target.value)}
                    />
                    <Form.Label column="sm">Telefono secundario</Form.Label>
                  </Form.Group>
                  <Form.Group as={Col} controlId="txtEmail">
                    <Form.Control
                      type="email"
                      placeholder="Correo electrónico"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Label column="sm">Correo electrónico</Form.Label>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Button
                    variant="outline-primary"
                    type="submit"
                    size="lg"
                    block
                  >
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
