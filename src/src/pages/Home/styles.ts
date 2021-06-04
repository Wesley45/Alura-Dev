import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 1.6rem 4rem 1.6rem;

  @media (min-width: 768px) {
    margin: 0 3.2rem 4rem 3.2rem;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const MenuContainer = styled.div`
  display: none;
  width: 25vw;

  p {
    color: #ffffff;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: 0.4em;
    margin-bottom: 1.6rem;
    text-transform: uppercase;
  }

  @media (min-width: 992px) {
    display: block;
  }
`;

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;

  @media (min-width: 992px) {
    width: 18.9rem;
  }
`;

export const ListMenuItem = styled.li`
  & + li {
    margin-top: 1.6rem;
  }

  a {
    align-items: center;
    display: flex;
    text-decoration: none;

    div {
      align-items: center;
      background: #5081fb;
      border-radius: 1.6rem;
      display: flex;
      justify-content: center;
      margin-right: 1.6rem;
      height: 4.8rem;
      opacity: 0.48;
      width: 4.8rem;

      svg {
        color: #ffffff;
        font-size: 1.6rem;
      }
    }

    span {
      color: #ffffff;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.4rem;
      opacity: 0.56;
    }

    &:hover > div,
    &:hover span {
      opacity: 0.8;
    }

    &:active > div,
    &:hover span {
      opacity: 1;
    }
  }
`;

export const CodeContainer = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    width: 50vw;
  }
`;

export const CodeEditorContainer = styled.div<{
  background: string;
}>`
  align-items: flex-start;
  background: ${(props) => props.background};
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  height: 49.2rem;
  padding: 2.2rem;
  width: 100%;

  @media (min-width: 768px) {
    height: 36.6rem;
    padding: 3.2rem;
  }

  @media (min-width: 992px) {
    width: calc(50vw - 3.2rem);
  }
`;

export const CodeEditor = styled.div`
  background: #141414;
  border-radius: 0.8rem;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24);
  height: 100%;
  padding: 1.6rem;
  width: 100%;

  pre {
    //background: transparent;
    border: 0;
    color: #ffffff;
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-top: 2.4rem;
    height: 23.4rem;
    resize: none;
    width: 100%;

    code {
      /* background: transparent;
      color: #ffffff; */
      height: 100%;
      white-space: pre-wrap;
    }
  }

  /*  textarea {
    background: transparent;
    border: 0;
    color: #ffffff;
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-top: 2.4rem;
    height: 23.4rem;
    resize: none;
    width: 100%;
  } */
`;

export const MacButtons = styled.div`
  align-items: center;
  display: flex;

  div {
    border-radius: 50%;
    height: 1.2rem;
    width: 1.2rem;

    & + div {
      margin-left: 0.8rem;
    }

    &:first-child {
      background-color: #ff5f56;
    }

    &:nth-child(2) {
      background: #ffbd2e;
    }

    &:last-child {
      background-color: #27c93f;
    }
  }
`;

export const ProjectContainer = styled.div`
  margin-top: 4rem;
  padding-left: 0;
  width: 100%;

  h2 {
    color: #ffffff;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: 0.4em;
    margin-bottom: 1.6rem;
    text-transform: uppercase;
  }

  > input {
    background: rgba(255, 255, 255, 0.16);
    border: 0;
    border-radius: 0.8rem;
    color: #ffffff;
    font-size: 1.6rem;
    height: 5.6rem;
    line-height: 2.4rem;
    margin-bottom: 1.6rem;
    opacity: 0.64;
    padding: 0 1.4rem;
    transition: background 0.3s ease-in-out;
    width: 100%;

    &:hover {
      background: rgba(255, 255, 255, 0.24);
    }

    &:focus {
      background: rgba(255, 255, 255, 0.24);
      color: #ffffff;
    }

    &::placeholder {
      color: #ffffff;
    }
  }

  textarea {
    background: rgba(255, 255, 255, 0.16);
    border: 0;
    border-radius: 0.8rem;
    color: #ffffff;
    font-size: 1.6rem;
    height: 8rem;
    line-height: 2.4rem;
    opacity: 0.64;
    padding: 1.6rem 1.4rem;
    resize: none;
    transition: background 0.3s ease-in-out;
    width: 100%;

    &:hover {
      background: rgba(255, 255, 255, 0.24);
    }

    &:focus {
      background: rgba(255, 255, 255, 0.24);
      color: #ffffff;
    }

    &::placeholder {
      color: #ffffff;
    }
  }

  button {
    background: #5081fb;
    border-radius: 0.8rem;
    border: 0;
    color: #051d3b;
    font-size: 1.6rem;
    font-weight: 600;
    height: 5.6rem;
    line-height: 2.4rem;
    margin-top: 3.2rem;
    text-align: center;
    transition: background 0.3s ease-in-out;
    width: 100%;

    &:hover {
      background: #7ba4fc;
      border-color: #7ba4fc;
    }

    &:active {
      background: #7ba4fc;
      border-color: rgb(80, 129, 251);
      box-shadow: 0 0 0 4px rgb(80 129 251 / 72%);
    }

    &:focus {
      background: #96b9fd;
    }
  }

  @media (min-width: 992px) {
    margin-top: 0;
    padding-left: 4rem;
    width: 25vw;
  }
`;

export const ButtonHighlight = styled.button`
  background: rgba(80, 129, 251, 0.08);
  border: 0;
  border-radius: 8px;
  color: #ffffff;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-top: 3.2rem;
  height: 5.6rem;
  transition: background 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background: rgba(80, 129, 251, 0.16);
  }

  &:active {
    background: rgba(80, 129, 251, 0.16);
    border: 4px solid rgba(80, 129, 251, 0.24);
    box-shadow: 0 0 0 4px rgb(80 129 251 / 24%);
  }

  &:focus {
    background: rgba(80, 129, 251, 0.24);
    border-color: rgba(80, 129, 251, 0.08);
  }
`;

export const CustomizationContainer = styled.div`
  margin-top: 4rem;

  select {
    background: rgba(255, 255, 255, 0.16);
    border: 0;
    border-radius: 8px;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.6rem;
    height: 5.6rem;
    line-height: 2.4rem;
    margin-bottom: 1.6rem;
    opacity: 0.64;
    padding: 0 1.4rem;
    transition: background 0.3s ease-in-out;
    width: 100%;

    option {
      background-color: rgba(255, 255, 255, 0.16);
      color: #000000;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.24);
    }

    &:focus {
      background: rgba(255, 255, 255, 0.24);
      color: #ffffff;
    }

    &::placeholder {
      color: #ffffff;
    }
  }

  @media (min-width: 768px) {
    div {
      display: flex;
      justify-content: space-between;
    }

    select {
      margin-bottom: 0;
      margin-right: 0.8rem;
    }
  }

  @media (min-width: 992px) {
    div {
      display: block;
    }

    select {
      margin-bottom: 1.6rem;
      margin-right: 0;
    }
  }
`;

export const InputColor = styled.div`
  background: rgba(196, 196, 196, 0.01);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 0.8rem;
  height: 5.6rem;
  padding: 0.8rem;
  width: 100%;

  @media (min-width: 768px) {
    margin-left: 0.8rem;
  }

  @media (min-width: 992px) {
    margin-left: 0;
  }

  input {
    background: none;
    border-radius: 4px;
    border: 0;
    height: 100%;
    width: 100%;
  }
`;
