import styled from "styled-components";

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

export const ListMenuItem = styled.li<{
  active: boolean;
}>`
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
      opacity: ${(props) => (props.active ? "1" : "0.48")};
      transition: opacity 0.3s ease-in-out;
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
      opacity: ${(props) => (props.active ? "1" : "0.56")};
      transition: opacity 0.3s ease-in-out;
    }

    &:hover > div {
      opacity: 0.8;
    }

    &:hover span {
      opacity: 0.72;
    }

    &:active > div,
    &:active span {
      opacity: 1;
    }
  }
`;
