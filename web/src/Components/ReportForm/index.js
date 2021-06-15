import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { newReport } from "../../Utils/functions";
import {getLoggedUserId} from '../../Utils/auth';
const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "40vh",
    marginTop: "65px",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ReportForm() {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const id = getLoggedUserId();
  const handleSubmit = async (e) => {
    e.preventDefault();
    newReport({
      description,
      images:"",
      user:{
        id
      }
    }).then((res)=>{
      if(res.data.msg === 'Inserted'){
        alert("Reporte enviado con éxito");
        setDescription("");
      }else{
        alert("Algo salió mal");
      }
    })
  }
  
  return (
    <div className={classes.root}>
      <Card border="dark" bg="light" text="dark">
        <Card.Header as="h4">
          ¿Tuviste algun fallo en la página? ¡Cuentanos!
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="txtDescription">
                <Form.Label column="sm">Describenos tu situación</Form.Label>
                <InputGroup>
                  <FormControl
                    as="textarea"
                    aria-label="With textarea"
                    placeholder="Realiza una breve descripcion del problema"
                    required
                    onChange={(e) =>setDescription(e.target.value)}
                  />
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.File
                id="images"
                label="Imagenes de ejemplo (Opcional)"
                custom
              />
            </Form.Row>
            <div>
              <Form.Row>
                <Button variant="outline-primary" type="submit" size="lg" block>
                  Enviar reporte
                </Button>
              </Form.Row>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
