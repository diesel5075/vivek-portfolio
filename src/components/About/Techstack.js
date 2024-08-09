import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { TiHtml5 } from "react-icons/ti";
import { MdCss } from "react-icons/md";
import { FaBootstrap } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <TiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdCss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
    </Row>
  );
}

export default Techstack;
