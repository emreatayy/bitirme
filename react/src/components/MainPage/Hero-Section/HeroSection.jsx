

import React, {useState} from "react";
import {Container,Row,Col} from 'reactstrap';
import heroImg from '../image/hero-img2.png';
import './hero-section.css';
import {Link, Navigate} from "react-router-dom";
const HeroSection = () =>{
    const [search, setSearch] = useState("");
    return <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2>EasyLearn</h2>
                        <div className="search">
                            <input onChange={ev => setSearch(ev.target.value)} type="text"
                                   placeholder="Search"/>
                            <select>
                                <option>dersler</option>
                                <option>öğretmenler</option>
                            </select>
                            <Link className="btn" to= {"/lessons?search="+search}>Search</Link>
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
