import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Yeniliklerden haberdar olmak için</h2>
            <div className="subscribe">
              <input type="text" placeholder="Email" />
              <button className="btn">Abone Ol</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;