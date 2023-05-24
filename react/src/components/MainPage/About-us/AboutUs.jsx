
import React from "react";
import './about.css'
import { Container,Row,Col } from "reactstrap";
import aboutImg from '../image/about.png';
import CountUp from 'react-countup';

const AboutUs=()=>{
    return (
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="about__img">
                  <img src={aboutImg} alt="" className="w-100" />
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="about__content">
                  <h2>Hakkımızda</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi cupiditate animi deserunt libero nesciunt corporis
                    explicabo nobis ex quo molestiae!
                  </p>

                  <div className="about__counter">
                    <div className=" d-flex gap-5 align-items-center">
                      <div className="single__counter">
                        <span className="counter">
                          <CountUp start={0} end={25} duration={2} suffix="K" />
                        </span>

                        <p className="counter__title">Başarılı Proje</p>
                      </div>

                      <div className="single__counter">
                        <span className="counter">
                          <CountUp start={0} end={5} duration={2} suffix="K" />
                        </span>

                        <p className="counter__title">Patentli kurslar</p>
                      </div>
                    </div>

                    <div className=" d-flex gap-5 align-items-center">
                      <div className="single__counter">
                        <span className="counter">
                          <CountUp start={0} end={10} duration={2} suffix="K" />
                        </span>

                        <p className="counter__title"> Destekleyen Katılımcı</p>
                      </div>

                      <div className="single__counter">
                        <span className="counter">
                          <CountUp start={0} end={5} duration={2} suffix="K" />
                        </span>

                        <p className="counter__title">Çeşitli Kategorilerimiz</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      );
    };

    export default AboutUs;
