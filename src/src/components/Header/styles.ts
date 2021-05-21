import styled from "styled-components";

export const PageHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 5.6rem;
  margin: 1.6rem 1.6rem 4rem 1.6rem;

  @media (min-width: 768px) {
    padding: 3.2rem;
  }
`;

export const PageContainerLogo = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const Logo = styled.img`
  height: auto;
  max-width: 100%;
`;

export const PageContainerInput = styled.div`
  width: 50%;
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
`;

export const PageContainerAvatar = styled.div`
  align-items: center;
  display: none;
  justify-content: flex-end;
  width: 25%;

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
