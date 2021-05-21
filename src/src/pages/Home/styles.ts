import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1.6rem 1.6rem 1.6rem;

  @media (min-width: 768px) {
    padding: 0 3.2rem 3.2rem 3.2rem;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

export const MenuContainer = styled.div`
  display: none;
  width: 25%;

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
`;

export const ListMenuItem = styled.li`
  align-items: center;
  display: flex;

  & + li {
    margin-top: 1.6rem;
  }

  div {
    align-items: center;
    background: #5081fb;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    margin-right: 1.6rem;
    height: 4.8rem;
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
  }
`;

export const CodeContainer = styled.div`
  width: 100%;

  @media (min-width: 992px) {
    width: 50%;
  }
`;

export const CodeEditorContainer = styled.div`
  align-items: flex-start;
  background: #6bd1ff;
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
`;

export const CodeEditor = styled.div`
  background: #141414;
  border-radius: 0.8rem;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24);
  height: 100%;
  padding: 1.6rem;
  width: 100%;

  textarea {
    background: transparent;
    border: 0;
    color: #ffffff;
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-top: 2.4rem;
    height: 234px;
    resize: none;
    width: 100%;
  }
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

  p {
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
    width: 100%;
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
    width: 100%;
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
    width: 100%;
  }

  @media (min-width: 992px) {
    margin-top: 0;
    padding-left: 4rem;
    width: 25%;
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
  width: 100%;
`;

export const CustomizationContainer = styled.div`
  margin-top: 4rem;

  select {
    background: rgba(255, 255, 255, 0.16);
    border: 0;
    border-radius: 8px;
    color: #ffffff;
    font-size: 1.6rem;
    height: 5.6rem;
    line-height: 2.4rem;
    margin-bottom: 1.6rem;
    opacity: 0.64;
    padding: 0 1.4rem;
    width: 100%;
  }

  div {
    background: rgba(196, 196, 196, 0.01);
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 0.8rem;
    height: 5.6rem;
    padding: 0.8rem;
    width: 100%;

    input {
      border-radius: 4px;
      border: 0;
      height: 100%;
      width: 100%;
    }
  }
`;
