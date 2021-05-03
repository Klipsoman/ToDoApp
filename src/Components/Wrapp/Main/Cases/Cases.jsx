import React, { useEffect} from "react";
import css from "./Cases.module.css";
import "font-awesome/css/font-awesome.min.css";
import PropTypes from "prop-types";
import { Case } from "./Case/Case";


export const Cases = ({list, setList, deleteCase, setCountDoneCases}) => {
  useEffect(() => {
    let initList = localStorage.getItem("list") || JSON.parse([]);
    setList(JSON.parse(initList));
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  let listOfCases = list.map((elem, index) => {
    return <Case key={index} deleteCase={deleteCase} text={elem.text} id={elem.id} index={index}
    setCountDoneCases={setCountDoneCases}/>
  });

  return  <div className={css.list}>
    { listOfCases }
    </div>
}

Cases.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  deleteCase: PropTypes.func,
  setCountDoneCases: PropTypes.func,
};

