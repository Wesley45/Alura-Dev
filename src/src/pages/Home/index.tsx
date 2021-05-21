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
          <p>Seu projeto</p>
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
            <p>Personalização</p>
            <select name="language" id="language">
              <option value="">JavaScript</option>
            </select>
            <div>
              <input
                type="color"
                id="favcolor"
                name="favcolor"
                value="#6BD1FF"
              ></input>
            </div>
          </CustomizationContainer>

          <button>Salvar projeto</button>
        </ProjectContainer>
      </PageContainer>
    </>
  );
};

export default Home;
