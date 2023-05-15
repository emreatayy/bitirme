import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from 'C:/Users/Ali/Documents/GitHub/bitirme/EasyLearn/react/my-app/src/assests/image/web-design.png';
import courseImg2 from 'C:/Users/Ali/Documents/GitHub/bitirme/EasyLearn/react/my-app/src/assests/image/graphics-design.png';
import courseImg3 from 'C:/Users/Ali/Documents/GitHub/bitirme/EasyLearn/react/my-app/src/assests/image/ui-ux.png';
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Tasarım BootCamp-2023",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Profesyonel Grafik Tasarımı, PhotoShop",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp-2023 Başlıyor",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Popüler Kurslarımız</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">Kursları Görüntüle</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;