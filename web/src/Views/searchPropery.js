import React, { useState, useEffect } from "react";
import "../Styles/custom.css";
import Grid from "@material-ui/core/Grid";
import { getProperties } from "../Utils/functions";
import PropertyTumbnail from "../Components/Property/tumbnail";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function SearchPropertyView() {
  const GRID_SPACING = 2;
  const [inputValue, setInputValue] = useState("");
  const [properties, setProperties] = useState([]);
  const [roomsMin, setRoomsMin] = useState("");
  const [roomsMax, setRoomsMax] = useState("");
  const [builtMin, setBuiltMin] = useState("");
  const [builtMax, setBuiltMax] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [age, setAge] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [garages, setGarages] = useState("");
  const [filtredProperties, setFiltredProperties] = useState([]);
  const [fullFilteredProperties, setFullFilteredProperties] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getProperties().then((propertylist) => {
      setProperties(propertylist);
      setFiltredProperties(propertylist);
    });
  }, []);

  function handleChange(e) {
    if (!/^[a-zA-Z\s]*$/.test(e.target.value)) {
      alert("Solo se aceptan letras");
      return;
    }
    setInputValue(e.target.value);
    let result = [];
    result = properties.filter((data) => {
      return (
        data.tittle.toLowerCase().search(e.target.value.toLowerCase()) != -1
      );
    });
    setFiltredProperties(result);
    setFullFilteredProperties(filtredProperties);
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    let result = [];
    setFiltredProperties(fullFilteredProperties);
    if(roomsMin!==""){
      result = filtredProperties.filter((data) => {
        return (
          data.features.rooms >= roomsMin
        );
      });
      setFiltredProperties(result);
    }
    if(roomsMax!==""){
      result = filtredProperties.filter((data) => {
        return (
          data.features.rooms <= roomsMax
        );
      });
      setFiltredProperties(result);
    }
    if(builtMin!==""){
      result = filtredProperties.filter((data) => {
        return (
          data.features.built >= builtMin
        );
      });
      setFiltredProperties(result);
    }
    if(builtMax!==""){
      result = filtredProperties.filter((data) => {
        return (
          data.features.built >= builtMax
        );
      });
      setFiltredProperties(result);
    }
    if(priceMin!==""){
      result = filtredProperties.filter((data) => {
        return (
          data.price >= priceMin
        );
      });
      setFiltredProperties(result);
    }
    if(priceMax!==""){
      result = filtredProperties.filter((data) => {
        return (
          data.price >= priceMax
        );
      });
      setFiltredProperties(result);
    }
    if(age!==""){
      result = filtredProperties.filter((data) => {
        return (
          data.features.age <= age
        );
      });
      setFiltredProperties(result);
    }
    if(bathrooms!==""){
      result = filtredProperties.filter((data) => {
        return (
          data.features.bathrooms <= bathrooms
        );
      });
      setFiltredProperties(result);
    }
    if(garages!==""){
      result = filtredProperties.filter((data) => {
        return (
          data.features.garages <= garages
        );
      });
      setFiltredProperties(result);
    }
    setShow(false);
  }

  return (
    <div className="grid-fix" id="gridDiv">
      <nav className="navbar navbar-expand-sm position-fixed fl-right sub-nav" style={{ paddingTop: "0px" }}>
        <div className="card left-padding right-padding bg-secondary navbar-collapse w-100 order-3 dual-collapse2" style={{ marginTop: "0px" }}>  
          <ul className="navbar-nav ml-auto">
            <li>
              <div className="input-group text-light btn-margin right-padding">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar"
                  value={inputValue}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-dark" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            <li>
              <button
                className="nav-link btn btn-dark text-light btn-margin"
                onClick={handleShow}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-funnel"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                </svg>
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Filtros de busqueda</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Row>
                      <Form.Label>Recámaras</Form.Label>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="txtRoomsMin">
                        <Form.Control
                          as="select"
                          defaultValue="Sin Mínimo"
                          onChange={(e) => setRoomsMin(e.target.value)}
                        >
                          <option>Sin Mínimo</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4 o mas</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group as={Col} controlId="txtRoomsMax">
                        <Form.Control
                          as="select"
                          defaultValue="Sin Máximo"
                          onChange={(e) => setRoomsMax(e.target.value)}
                        >
                          <option>Sin Máximo</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Label>Superficie m²</Form.Label>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="txtBuiltMin">
                        <Form.Control
                          type="number"
                          placeholder="Sin Mínimo"
                          onChange={(e) => setBuiltMin(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="txtBuiltMax">
                        <Form.Control
                          type="number"
                          placeholder="Sin Máximo"
                          onChange={(e) => setBuiltMax(e.target.value)}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Label>Precio</Form.Label>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="txtPriceMin">
                        <Form.Control
                          type="number"
                          placeholder="Desde"
                          onChange={(e) => setPriceMin(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="txtPriceMax">
                        <Form.Control
                          type="number"
                          placeholder="Hasta"
                          onChange={(e) => setPriceMax(e.target.value)}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Label>Antigüedad</Form.Label>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="txtAge">
                        <Form.Control
                          as="select"
                          defaultValue="Seleccione Antigüedad"
                          onChange={(e) => setAge(e.target.value)}
                        >
                          <option>Seleccione antigüedad máxima en años</option>
                          <option>5</option>
                          <option>10</option>
                          <option>20</option>
                          <option>50</option>
                          <option>100</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Label>Baños</Form.Label>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="txtBathrooms">
                        <Form.Control
                          as="select"
                          defaultValue="Elige una opción"
                          onChange={(e) => setBathrooms(e.target.value)}
                        >
                          <option>Elige una opción</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Label>Estacionamientos</Form.Label>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="txtGarages">
                        <Form.Control
                          as="select"
                          defaultValue="Elige una opción"
                          onChange={(e) => setGarages(e.target.vaue)}
                        >
                          <option>Elige una opción</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </Form.Control>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Button
                        variant="outline-principal"
                        type="submit"
                        size="lg"
                        block
                      >
                        Aplicar filtros
                      </Button>
                    </Form.Row>
                  </Form>
                </Modal.Body>
              </Modal>
            </li>
            <li>
              <a
                className="nav-link btn btn-dark text-light btn-margin"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-sort-down-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="nav-link btn btn-dark text-light btn-margin"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clipboard-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="p-t-sub" id="Grid">
        <Grid container spacing={GRID_SPACING}>
          {filtredProperties &&
            filtredProperties.map((property, index) => {
              return (
                <Grid
                  container
                  key={index}
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  spacing={GRID_SPACING}
                >
                  <PropertyTumbnail property={property} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </div>
  );
}
