import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./styles/SearchBar.css";
import { useState } from "react";
const SearchBar = ({ getCityData }) => {
  const [name, setname] = useState("");
  const changeHandler = (e) => {
    setname(e.target.value);
  };
const clickHandler=()=>{
  getCityData(name)
}
  return (
    <div className="row justify-content-center">
      <div className="searchbar col-10 col-lg-8">
        <InputGroup className="igroup">
          <Form.Control
            placeholder="Enter City Name"
            aria-describedby="basic-addon2"
            className="form-control"
            onChange={changeHandler}
          />
          <InputGroup.Text
            id="basic-addon2"
            className="search-icon"
            onClick={clickHandler}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  );
};

export default SearchBar;
