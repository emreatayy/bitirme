
import React from "react";
import{ Container,Row,Col} from'reactstrap'
const Company=()=>{
    return <section>
        <Container>
        <Row>
            <Col lg='2' md='3'>
                <h3 className="d-flex align-items-center gap-1">
                     <i className="ri-instagram-line"></i>İnstagram</h3>
            </Col>

            <Col lg='2' md='3'>
                <h3 className="d-flex align-items-center gap-1">
                    <i className="ri-pinterest-line"></i>Pinterest</h3>
            </Col>

            <Col lg='2' md='3'>
                <h3 className="d-flex align-items-center gap-1">
                <i className="ri-whatsapp-fill"></i>Whatsapp</h3>
            </Col>

            <Col lg='2' md='3'>
                <h3 className="d-flex align-items-center gap-1">
                    <i className="ri-apple-fill"></i>Apple</h3>
            </Col>

            <Col lg='2' md='3'>
                <h3 className="d-flex align-items-center gap-1">
                     <i className="ri-finder-fill"></i>Finder</h3>
            </Col>

            <Col lg='2' md='3'>
                <h3 className="d-flex align-items-center gap-1">
                    <i className="ri-google-fill"></i>Google</h3>
            </Col>
        </Row>
        </Container>

    </section>
};

export default Company;
