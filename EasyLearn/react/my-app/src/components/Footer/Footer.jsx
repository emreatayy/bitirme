import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Anasayfa",
    url: "#",
  },
  {
    display: "Hakkımızda",
    url: "#",
  },

  {
    display: "Kurslar",
    url: "#",
  },

  {
    display: "Sayfalar",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
  {
    display: "Login",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Gizlilik Politikası",
    url: "#",
  },
  {
    display: "Üyelik",
    url: "#",
  },

  {
    display: "Satın Olma Rehberi",
    url: "#",
  },

  {
    display: "Kullanım Şartları",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> EasyLearn
            </h2>

            <div className="follows">
              <p className="mb-0">Sosyal medya hesaplarımızı takibe alın</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Kısayollar</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Bilgiler</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">İletişime Geçin</h6>

            <p>Adres: Fırat Üniversitesi/Elazığ</p>
            <p> Telefon: 0536 484 1639 </p>
            <p>Email: ali.erdogann21@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;