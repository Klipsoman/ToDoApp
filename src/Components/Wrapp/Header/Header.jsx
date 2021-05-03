import React from "react";
import { Col, Container, Row } from "reactstrap";
import css from "./Header.module.css";
import { Logo } from "./Logo/Logo";
import PropTypes from "prop-types";

export const Header = ({countDoneCases}) => {
  return (
    <div className={css.header}>
      <Container>
        <Row>
          <Col xs="12" sm="9">
            <Logo />
          </Col>
          <Col xs="12" sm="3">
            <div className={css.caseCounter}>
              <p>дел выполнено: <span >{countDoneCases} </span></p>
            </div>  
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Header.propTypes = {
  countDoneCases: PropTypes.number,
};
