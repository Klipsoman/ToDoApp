import React from "react";
import { Col, Row } from "reactstrap";
import css from "./Case.module.css";
import "font-awesome/css/font-awesome.min.css";
import PropTypes from "prop-types";

export const Case = ({ index, text, deleteCase, id, setCountDoneCases }) => {
  return (
    <div key={index} className={css.caseBlock}>
      <Row>
        <Col>
          <p className={css.case}>
            {" "}
            <span className={css.countCase}>{index + 1}.</span> {text}{" "}
          </p>
        </Col>
        <Col xs="auto" className={css.choiceBlock}>
          <div className={css.trashBlock}>
            <li
              className={"fa fa-trash fa-2x"}
              onClick={() => {
                deleteCase(id);
              }}
            >
              <span className={css.deleteCase}>Удалить</span>
            </li>
          </div>
          <div
            className={css.doneBlock}
            onClick={() => {
              setCountDoneCases((prev) => prev + 1)
              deleteCase(id)       
            }
          }
          >
            <i className={"fa fa-check fa-2x"}></i>
            <div className={css.doneCase}>Дело сделано</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
Case.propTypes = {
  index: PropTypes.number,
  text: PropTypes.string,
  deleteCase: PropTypes.func,
  id: PropTypes.number,
  setCountDoneCases: PropTypes.func,
};
