import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Thumbnail from '../Thumbnail';
import '../../Styles/custom.css';

export default function Grid(props) {
    return (
        <Container>
            <Row>
                {props.properties.map((property, index)=>{
                    return <Col className="thumbnail" xl={3} lg={4} md={6} sm={12} key={index}><Thumbnail property={property}/></Col>;
                })}
            </Row>
        </Container>
    );
}

function getComponents(props) {
    var thumbnails = [];
    var index = 0;
    if (props.action === "favoritos") {
        props.user.favoritos.forEach(idFavorito => {
            let property = null;
            /*property = consulta a la base de datos para obtener la info de la propiedad, algo como "property = db.get(idFavorito)*/
            thumbnails.push(<Col className="col-xl-3 col-lg-4 col-md-6 col-12 thumbnail" key={index.toString()}><Thumbnail property={property} /></Col>);
            index++;
        });
    }
    else {
        for (index = 0; index < 19; index++) {
            thumbnails.push(<Col className="col-xl-3 col-lg-4 col-md-6 col-12 thumbnail" key={index.toString()}><Thumbnail props={null} /></Col>);
        }
    }
    return thumbnails;
}