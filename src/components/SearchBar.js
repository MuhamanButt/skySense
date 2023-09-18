import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./styles/SearchBar.css";
const SearchBar = () => {
  return (
    <div className="row justify-content-center">
        <div className="searchbar col-10 col-lg-8">
      <InputGroup>
        <Form.Control
          placeholder="Enter City Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className="form-control"
        />
        <InputGroup.Text id="basic-addon2" className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
      </InputGroup>
    </div>
    </div>
  );
};

export default SearchBar;
