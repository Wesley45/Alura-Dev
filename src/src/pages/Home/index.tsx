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
  CodeEditor,
  MacButtons,
  ButtonHighlight,
} from "./styles";

import "./styles.css";

const Home = () => {
  return (
    <div className="page">
      <Header />
      <PageContainer>
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
              <CodeEditor>
                <MacButtons>
                  <div></div>
                  <div></div>
                  <div></div>
                </MacButtons>
                <textarea name="" id="" cols={30} rows={10}></textarea>
              </CodeEditor>
            </CodeContainer>
            <ButtonHighlight>Visualizar com o highlight</ButtonHighlight>
          </Col>
          <Col lg="3">
            <ProjectContainer>
              <p>Seu projeto</p>
            </ProjectContainer>
          </Col>
        </Row>
      </PageContainer>
    </div>
  );
};

export default Home;
