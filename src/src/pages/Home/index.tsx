import React from "react";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUsers } from "@fortawesome/free-solid-svg-icons";

import {
  PageContainer,
  MenuContainer,
  ListMenu,
  ListMenuItem,
  CodeContainer,
  CodeEditor,
  CodeEditorContainer,
  MacButtons,
  ButtonHighlight,
  ProjectContainer,
  CustomizationContainer,
  InputColor,
} from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <MenuContainer>
          <p>Menu</p>
          <ListMenu>
            <ListMenuItem>
              <a href="">
                <div>
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <span>Editor de código</span>
              </a>
            </ListMenuItem>
            <ListMenuItem>
              <a href="">
                <div>
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <span>Comunidade</span>
              </a>
            </ListMenuItem>
          </ListMenu>
        </MenuContainer>
        <CodeContainer>
          <CodeEditorContainer>
            <CodeEditor>
              <MacButtons>
                <div></div>
                <div></div>
                <div></div>
              </MacButtons>
              <textarea name="" id="" cols={30} rows={10}></textarea>
            </CodeEditor>
          </CodeEditorContainer>
          <ButtonHighlight>Visualizar com o highlight</ButtonHighlight>
        </CodeContainer>
        <ProjectContainer>
          <h2>Seu projeto</h2>
          <input
            type="text"
            name="project"
            id="project"
            placeholder="Nome do seu projeto"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Descrição do seu projeto"
          ></textarea>

          <CustomizationContainer>
            <h2>Personalização</h2>

            <div>
              <select name="language" id="language">
                <option value="">JavaScript</option>
                <option value="">HTML</option>
                <option value="">CSS</option>
              </select>
              <InputColor>
                <input
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  value="#6BD1FF"
                ></input>
              </InputColor>
            </div>
          </CustomizationContainer>

          <button>Salvar projeto</button>
        </ProjectContainer>
      </PageContainer>
    </>
  );
};

export default Home;
