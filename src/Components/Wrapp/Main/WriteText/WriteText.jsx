import React from "react";
import { InputGroupAddon, Input, InputGroup, Button } from "reactstrap";
import PropTypes from "prop-types";

export const WriteText = ({value, handleChange, isEnterPress, addToList}) => {
  return (
    <InputGroup size="normal">
      <Input
        value={value}
        onChange={handleChange}
        onKeyPress={isEnterPress}
        placeholder="Что вы планируете сделать?"
        maxLength='150'
      />
      <InputGroupAddon addonType="append">
        <Button color="info" onClick={addToList}>
          Записать
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

WriteText.propTypes = {
  handleChange: PropTypes.func,
  addToList: PropTypes.func,
  value: PropTypes.string,
  isEnterPress: PropTypes.func,
};
