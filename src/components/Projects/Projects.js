import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/Bee.jpg";
import chatify from "../../Assets/Projects/bookmydesk.jpg";
import bitsOfCode from "../../Assets/Projects/Leave.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BookMyDesk"
              description="A web Application that allows employees to book their workspaces in advance and enables admins to manage employees and add desks, with email notification features."
              demoLink="https://bookmidesk.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Employee Leave Management System"
              description="A project which completely focused on leave management of the organization with leave apply, number of leaves remained, leave approval by the admin of the company."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bee Keeping Portal"
              description="It is complete management of apiculture in we can buy the necessary instruments to extract honey from supplier to farmer, sell the honey and wax from farmer to consumer, consumer can track the farmer location using location tracking and buy the honey."            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blogs"
              description="Developed a blog project using the MERN stack, allowing end users to comment on blogs or articles with comments stored in the database alongside usernames."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
