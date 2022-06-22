// import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";

export const SearchForm = ({ handleOnsubmit }) => {
  const [str, setStr] = useState("");
  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    handleOnsubmit(str);
    e.target.reset(); //From Kesab
  };
  return (
    <div className="mt-5">
      <h1 className="text-center">My move List</h1>
      <Form className="mt-3" onSubmit={formSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              onChange={handleOnChange}
              placeholder="search movie name..."
            />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
