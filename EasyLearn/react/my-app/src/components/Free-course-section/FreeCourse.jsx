
import React from "react";
import {Container,Row,Col} from 'reactstrap';
import courseImg01 from 'C:/Users/Ali/Documents/GitHub/bitirme/EasyLearn/react/my-app/src/assests/image/web-development.png';
import courseImg02 from 'C:/Users/Ali/Documents/GitHub/bitirme/EasyLearn/react/my-app/src/assests/image/kids-learning.png';
import courseImg03 from 'C:/Users/Ali/Documents/GitHub/bitirme/EasyLearn/react/my-app/src/assests/image/seo.png';
import courseImg04 from 'C:/Users/Ali/Documents/GitHub/bitirme/EasyLearn/react/my-app/src/assests/image/branding.png';
import FreeCourseCard from './FreeCourseCard';
import "./free-course.css";

const freeCourseData = [
  {
    id: '01',
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: '02',
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: '03',
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: '04',
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Ücretsiz Kurslar</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;