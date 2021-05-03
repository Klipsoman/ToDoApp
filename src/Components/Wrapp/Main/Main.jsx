import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import css from "./Main.module.css";
import { WriteText } from "./WriteText/WriteText";
import "font-awesome/css/font-awesome.min.css";
import { Cases } from "./Cases/Cases";
import PropTypes from "prop-types";

export const Main = ({setCountDoneCases}) => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const isEnterPress = (e) => {
    if (!value || !value.trim()) {
      return false;
    }
    if (e.key === "Enter") {
      setList([
        ...list,
        {
          id: Date.now(),
          text: value,
        },
      ]);
      setValue("");
    }
  };

  const addToList = () => {
    if (!value || !value.trim()) {
      return false;
    }
    setList([
      ...list,
      {
        id: Date.now(),
        text: value,
      },
    ]);
    setValue("");
  };

  const deleteCase = (id) => {
    setList(list.filter((elem) => elem.id !== id));
  };

  return (
    <div className={css.main}>
      <Container>
        <Row>
          <Col>
            <div className={css.contentWrapper}>
              <WriteText
                handleChange={handleChange}
                addToList={addToList}
                isEnterPress={isEnterPress}
                value={value}
              />
              <Cases 
                list={list}
                setList={setList}
                deleteCase={deleteCase}
                setCountDoneCases={setCountDoneCases}
             />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Main.propTypes = {
  setCountDoneCases: PropTypes.func,
};
