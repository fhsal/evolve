import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap"
import Col from "../Col";
import Slider from "../Slider";


function Journal(props) {
  return (
    <div>
        <Col size="md-12">
        <Card>
            <Card.Body>
  <InputGroup className="mb-2">
    <InputGroup.Prepend>
      <InputGroup.Text></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Your mood today in a few words."
      aria-label="Your mood today in a few words."
    />
  </InputGroup>

  <ButtonGroup size="lg" className="mb-2">
    <Button className="mood btn-circle">😌</Button>
    <Button className="mood btn-circle">😄</Button>
    <Button className="mood btn-circle">🥰</Button>
    <Button className="mood btn-circle">😭</Button>
    <Button className="mood btn-circle">😡</Button>
    <Button className="mood btn-circle">😴</Button>
  </ButtonGroup>

  <InputGroup className="mb-2">
    <InputGroup.Prepend>
      <InputGroup.Text> Daily Reflection </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl  placeholder="Not sure what to write? Try listing 5 things you're grateful for today."
    as="textarea" aria-label="Daily Reflection" />
  </InputGroup>

  <Slider></Slider>




  </Card.Body>
</Card>
</Col>
    </div>
  );
}

export default Journal;