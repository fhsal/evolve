import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import RandomQuote from "../components/RandomQuote";

function Landing() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80">
        <h1 className="text-center">Evolve</h1>
        <h2>Connect your mind & body. </h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">welcome, user.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <RandomQuote>
            <h2>hello</h2>
          </RandomQuote>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
