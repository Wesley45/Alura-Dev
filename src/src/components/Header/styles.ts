import styled from "styled-components";

export const PageHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 5.6rem;
  margin: 1.6rem 1.6rem 4rem 1.6rem;

  @media (min-width: 768px) {
    margin: 3.2rem;
  }
`;

export const PageContainerLogo = styled.div`
  width: 50vw;

  @media (min-width: 768px) {
    margin-right: 4rem;
    width: 25vw;
  }

  @media (min-width: 992px) {
    margin-right: 0;
  }
`;

export const Logo = styled.img`
  height: auto;
  max-width: 100%;
`;

export const PageContainerInput = styled.div`
  width: 0;

  @media (min-width: 768px) {
    width: 80vw;
  }

  @media (min-width: 992px) {
    width: 50vw;
  }
`;

export const InputSearch = styled.input`
  background-color: rgba(255, 255, 255, 0.16);
  border: 0;
  border-radius: 8px;
  color: #ffffff;
  display: none;
  font-size: 1.6rem;
  height: 5.6rem;
  padding: 0px 1.4rem;
  width: 100%;

  @media (min-width: 768px) {
    display: block;
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
`;

export const PageContainerAvatar = styled.div`
  align-items: center;
  display: none;
  justify-content: flex-end;
  padding: 1.2rem;
  width: 25vw;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem;
    text-decoration: none;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      border-radius: 8px;
    }
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 0.8rem;
  height: 3.2rem;
  width: 3.2rem;
`;

export const Username = styled.p`
  color: #fff;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 0;
  margin: 0;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50vw;

  @media (min-width: 768px) {
    margin-left: 4rem;
    width: 5vw;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  div {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 4.8rem;
    width: 4.8rem;

    svg {
      color: #ffffff;
      font-size: 2.4rem;
    }
  }
`;

export const Search = styled.div`
  div {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 4.8rem;
    margin-right: 0.8rem;
    width: 4.8rem;

    svg {
      color: #ffffff;
      font-size: 2.4rem;
    }
  }

  @media (min-width: 768px) {
    margin-right: 0;
    display: none;
  }
`;

export const PageHeaderMobile = styled.div<{
  open: boolean;
}>`
  display: block;
  background: #2d415b;
  border-radius: 0.8rem;
  padding: 2.4rem;
  position: fixed;
  top: 8rem;
  right: ${({ open }) => (open ? "0" : "-25.4rem")};
  width: 25.4rem;
  height: 100%;
  transition: right 0.2s linear;
  z-index: 1;

  hr {
    border: 1px solid #ffffff;
    margin: 2.4rem 0 2.4rem 0;
    opacity: 0.08;
  }

  div {
    align-items: center;
    display: flex;
    padding: 1.2rem;
  }

  @media (min-width: 768px) {
    top: 10rem;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const StyledBurger = styled.button<{
  open: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.4rem;
  height: 2.4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 2.4rem;
    height: 0.3rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45.4deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45.4deg)" : "rotate(0)")};
    }
  }
`;
