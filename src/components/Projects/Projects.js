import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import organick from "../../Assets/Projects/orgorg11.png";
import otp from "../../Assets/Projects/otp11.png";
import todo from "../../Assets/Projects/TODOTODO1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={organick}
              isBlog={false}
              title="organick-dev"
              description="Organic-Div is a modern, user-friendly website built with ReactJS that focuses on delivering high-quality, organic products and services. Our platform offers a seamless shopping experience for customers interested in sustainable and eco-friendly products."
              ghLink="https://github.com/diesel5075/organick-dev"
              demoLink="https://organick-dev.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TODO"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/diesel5075/todoapp"
              demoLink="https://todoapp-three-brown.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={otp}
              isBlog={false}
              title="OTP"
              description="An OTP (One-Time Password) system is used to verify a user's identity by sending a temporary code. This example demonstrates how to build a simple OTP input form in a React application."
              ghLink="https://github.com/diesel5075/otp"
              demoLink="https://otp-otp.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
