import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiExpress,
  SiCsharp,
  SiMongodb,
} from "react-icons/si";

import { PiFileSql } from "react-icons/pi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>Javascript</h5>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Node.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpress />
      <h5>Express.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React.js</h5>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <SiMongodb />
      <h5>MongoDB</h5>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5>Git & Github</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <PiFileSql />
      <h5>SQL Language</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiCsharp />
      <h5>Csharp</h5>
      </Col>
      
      
      
      
    </Row>
  );
}

export default Techstack;
