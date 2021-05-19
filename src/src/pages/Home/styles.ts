import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 4rem 3.2rem 3.2rem 3.2rem;
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

export const CodeContainer = styled.div``;

export const ProjectContainer = styled.div``;
