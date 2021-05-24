import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUsers } from '@fortawesome/free-solid-svg-icons';

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
} from './styles';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
