
import React from "react";
import {Container,Row,Col} from 'reactstrap';
import courseImg01 from 'C:/Users/Ali/Documents/GitHub/bitirme/EasyLearn/react/my-app/src/assests/image/web-development.png';
import courseImg02 from 'C:/Users/Ali/Documents/GitHub/bitirme/EasyLearn/react/my-app/src/assests/image/kids-learning.png';
import courseImg03 from 'C:/Users/Ali/Documents/GitHub/bitirme/EasyLearn/react/my-app/src/assests/image/seo.png';
import courseImg04 from 'C:/Users/Ali/Documents/GitHub/bitirme/EasyLearn/react/my-app/src/assests/image/branding.png';


const FreeCourse=()=>{
    return <section>
        <Container>
            <Row>
                <Col lg='12' className="text-center-mb-5">
                    <h2>Ücretsiz kurslar</h2>
                </Col>

                <Col lg='3'>
                    <div className="single__free__course">
                        <div className="free__course_img">
                            <img src={courseImg01} alt="" />
                            <button className="btn free__btn">
                                Ücretsiz
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};
export default FreeCourse;






