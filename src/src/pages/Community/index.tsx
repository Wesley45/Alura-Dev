import React from "react";
import {
  CardCode,
  PageCommunityContainer,
  CardCodeEditor,
  CodeEditor,
  MacButtons,
  CardContent,
} from "./styles";

const Community: React.FC = () => {
  return (
    <PageCommunityContainer>
      <CardCode>
        <CardCodeEditor backgroud="#9aff6b">
          <CodeEditor>
            <MacButtons>
              <div></div>
              <div></div>
              <div></div>
            </MacButtons>
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </CodeEditor>
        </CardCodeEditor>
        <CardContent>
          <h2>Título do projeto</h2>
          <p>Essa é a descrição do meu projeto.</p>
        </CardContent>
      </CardCode>
      <CardCode>
        <CardCodeEditor backgroud="#6B83FF">
          <CodeEditor>
            <MacButtons>
              <div></div>
              <div></div>
              <div></div>
            </MacButtons>
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </CodeEditor>
        </CardCodeEditor>
        <CardContent>
          <h2>Título do projeto</h2>
          <p>Essa é a descrição do meu projeto.</p>
        </CardContent>
      </CardCode>
      <CardCode>
        <CardCodeEditor backgroud="#FFC46B">
          <CodeEditor>
            <MacButtons>
              <div></div>
              <div></div>
              <div></div>
            </MacButtons>
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </CodeEditor>
        </CardCodeEditor>
        <CardContent>
          <h2>Título do projeto</h2>
          <p>Essa é a descrição do meu projeto.</p>
        </CardContent>
      </CardCode>
      <CardCode>
        <CardCodeEditor backgroud="#FF6BCD">
          <CodeEditor>
            <MacButtons>
              <div></div>
              <div></div>
              <div></div>
            </MacButtons>
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </CodeEditor>
        </CardCodeEditor>
        <CardContent>
          <h2>Título do projeto</h2>
          <p>Essa é a descrição do meu projeto.</p>
        </CardContent>
      </CardCode>
    </PageCommunityContainer>
  );
};

export default Community;
