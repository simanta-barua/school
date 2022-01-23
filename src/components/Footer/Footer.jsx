import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container fluid className="text-left text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title">school name</h5>
            <p>
              <ul>
                <li className="list-unstyled">
                  <strong>ঠিকানা:</strong>KHOD KHASTE
                </li>
                <li className="list-unstyled">
                <strong>মোবাইল:&nbsp;</strong><a  href="tel:+88018......1" >+88 018.......</a>
                </li>
                 <li className="list-unstyled">
                 <strong>ই-মেইল:&nbsp;</strong><a  href="mailto:test@gamilc">testmail@gmail.com</a>
                </li>
              </ul>
            </p>
          </Col>
          <Col md="6">
            <h5 className="title">Links</h5>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a> Designed and Developed By Simanta Barua </a>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
