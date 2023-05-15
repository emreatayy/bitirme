

import React from "react";
import {Container,Row,Col} from 'reactstrap';
import heroImg from 'C:/Users/Ali/Documents/GitHub/bitirme/EasyLearn/react/my-app/src/assests/image/hero-img2.png';
import './hero-section.css';
const HeroSection = () =>{
    return <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2 className="mb-4">
                        EZ LEARN <br />ÇEREZ LEARN <br />
                        </h2>
                        <p className="mb-4"> 
                            asdklajkldjkladjklsadsadadad<br />
                            asdadasdadadaadad
                             <br />
                            ssssssssssadasdsadaasd
                            sdssadadasdadadadasdasd
                        </p>
                        <div className="search">
                            <input type="text" placeholder="Search"/>
                            <button className="btn">Search</button>
                        </div>
                    </div>
                     </Col>

                     <Col lg='6' md='6'>
                        <img src={heroImg} alt="" className="w-100" />
                     </Col>
            </Row>
        </Container>
    </section>

};
export default HeroSection;