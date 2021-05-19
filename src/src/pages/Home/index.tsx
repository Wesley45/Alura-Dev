import React from "react";
import Header from "../../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUsers } from "@fortawesome/free-solid-svg-icons";

import {
  PageContainer,
  MenuContainer,
  ListMenu,
  ListMenuItem,
  CodeContainer,
  ProjectContainer,
} from "./styles";

import "./styles.css";

const Home = () => {
  return (
    <div className="page">
      <Header />
      <Container fluid>
        <Row>
          <Col lg="3">
            <MenuContainer>
              <p>Menu</p>
              <ListMenu>
                <ListMenuItem>
                  <div>
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                  <span>Editor de código</span>
                </ListMenuItem>
                <ListMenuItem>
                  <div>
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <span>Comunidade</span>
                </ListMenuItem>
              </ListMenu>
            </MenuContainer>
          </Col>
          <Col lg="6">
            <CodeContainer>
              <button>Visualizar com o highlight</button>
            </CodeContainer>
          </Col>
          <Col lg="3">
            <ProjectContainer>
              <p>Seu projeto</p>
            </ProjectContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
