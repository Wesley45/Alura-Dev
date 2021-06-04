import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons";

import {
  CardCode,
  PageCommunityContainer,
  CardCodeEditor,
  CodeEditor,
  MacButtons,
  CardContent,
  CardActions,
  CardAction,
  CardAuthor,
} from "./styles";
import { Avatar, Username } from "../../components/Header/styles";

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
          <CardActions>
            <div>
              <CardAction>
                <FontAwesomeIcon icon={faComment} />
                <span>9</span>
              </CardAction>
              <CardAction>
                <FontAwesomeIcon icon={faHeart} />
                <span>9</span>
              </CardAction>
            </div>
            <CardAuthor>
              <Avatar
                src="https://avatars.githubusercontent.com/u/38232335?v=4"
                alt="Foto de perfil"
              />
              <Username>Wesley</Username>
            </CardAuthor>
          </CardActions>
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
          <CardActions>
            <div>
              <CardAction>
                <FontAwesomeIcon icon={faComment} />
                <span>9</span>
              </CardAction>
              <CardAction>
                <FontAwesomeIcon icon={faHeart} />
                <span>9</span>
              </CardAction>
            </div>
            <CardAuthor>
              <Avatar
                src="https://avatars.githubusercontent.com/u/38232335?v=4"
                alt="Foto de perfil"
              />
              <Username>Wesley</Username>
            </CardAuthor>
          </CardActions>
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
          <CardActions>
            <div>
              <CardAction>
                <FontAwesomeIcon icon={faComment} />
                <span>9</span>
              </CardAction>
              <CardAction>
                <FontAwesomeIcon icon={faHeart} />
                <span>9</span>
              </CardAction>
            </div>
            <CardAuthor>
              <Avatar
                src="https://avatars.githubusercontent.com/u/38232335?v=4"
                alt="Foto de perfil"
              />
              <Username>Wesley</Username>
            </CardAuthor>
          </CardActions>
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
          <CardActions>
            <div>
              <CardAction>
                <FontAwesomeIcon icon={faComment} />
                <span>9</span>
              </CardAction>
              <CardAction>
                <FontAwesomeIcon icon={faHeart} />
                <span>9</span>
              </CardAction>
            </div>
            <CardAuthor>
              <Avatar
                src="https://avatars.githubusercontent.com/u/38232335?v=4"
                alt="Foto de perfil"
              />
              <Username>Wesley</Username>
            </CardAuthor>
          </CardActions>
        </CardContent>
      </CardCode>
    </PageCommunityContainer>
  );
};

export default Community;
