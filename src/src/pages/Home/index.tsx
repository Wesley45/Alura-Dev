import React, { ChangeEvent, useEffect, useState , useCallback} from "react";
import hljs from "highlight.js";

import {
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
  const [language, setLanguage] = useState("javascript");
  const [background, setBackground] = useState("#6bd1ff");

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const handleOnClickHighlight = () => {
    const codigo = document.querySelector("code");
    if (codigo) {
      hljs.highlightBlock(codigo);
    }
  };

  const handleOnChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  const handleOnChangeColor = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBackground(event.target.value)
  }, [])

  return (
    <>
      <CodeContainer>
        <CodeEditorContainer background={background}>
          <CodeEditor>
            <MacButtons>
              <div></div>
              <div></div>
              <div></div>
            </MacButtons>
            <pre>
              <code
                className={`preview hljs ${language}`}
                contentEditable="true"
                aria-label="editor"
              ></code>
            </pre>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="d-none"
            ></textarea>
          </CodeEditor>
        </CodeEditorContainer>
        <ButtonHighlight onClick={handleOnClickHighlight}>
          Visualizar com o highlight
        </ButtonHighlight>
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
            <select
              name="language"
              id="language"
              value={language}
              onChange={handleOnChangeSelect}
            >
              <option value="javascript">JavaScript</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
            </select>
            <InputColor>
              <input
                onChange={handleOnChangeColor}
                type="color"
                id="favcolor"
                name="favcolor"
                defaultValue="#6BD1FF"
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
