import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 0 3.2rem 3.2rem 3.2rem;
`;

export const MenuContainer = styled.div`
  p {
    color: #ffffff;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: 0.4em;
    margin-bottom: 1.6rem;
    text-transform: uppercase;
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
  align-items: flex-start;
  background: #6bd1ff;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  height: 36.6rem;
  padding: 3.2rem;
  width: 100%;
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

export const ProjectContainer = styled.div``;

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
