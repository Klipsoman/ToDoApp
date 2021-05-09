import React from "react";
import { Col, Container, Row } from "reactstrap";
import PropTypes from "prop-types";

export const BootWrapp = (props) => {
  return (
    <Container>
      <Row>
        <Col>
        {props.children}
        </Col>
      </Row>
    </Container>
  );
};

BootWrapp.propTypes = {
    children: PropTypes.object,
  };
  
