import styled from "styled-components";

export const PageCommunityContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75vw;
`;

export const CardCode = styled.div`
  background: rgba(0, 0, 0, 0.16);
  border-radius: 0.8rem;
  height: 40rem;
  margin-bottom: 8.8rem;
  width: 50%;

  &:nth-child(2n + 1) {
    margin-right: 1.2rem;
    width: calc(50% - 1.2rem);
  }

  &:nth-child(2n) {
    margin-left: 1.2rem;
    width: calc(50% - 1.2rem);
  }
`;

export const CardCodeEditor = styled.div<{
  backgroud: string;
}>`
  background: ${(props) => props.backgroud};
  border-radius: 0.8rem;
  height: 28.8rem;
  padding: 2.4rem;
  width: 100%;
`;

export const CodeEditor = styled.div`
  background: #141414;
  box-shadow: 0px 1.6rem 2.4rem rgba(0, 0, 0, 0.24);
  border-radius: 0.8rem;
  height: 24rem;
  padding: 1.2rem;

  textarea {
    background: transparent;
    border: 0;
    color: #ffffff;
    font-size: 1.1rem;
    height: 19.5rem;
    line-height: 1.5rem;
    resize: none;
    width: 100%;
  }
`;

export const MacButtons = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 1.2rem;

  div {
    border-radius: 50%;
    height: 0.9rem;
    width: 0.9rem;

    & + div {
      margin-left: 0.6rem;
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

export const CardContent = styled.div`
  height: 11.2rem;
  padding: 2.4rem;

  h2 {
    color: #ffffff;
    font-size: 2.1rem;
    font-weight: 700;
    line-height: 3.1rem;
  }

  p {
    color: #ffffff;
    font-size: 1.6rem;
    line-height: 2.4rem;
    margin: 0.8rem 0;
    opacity: 0.8;
  }
`;
