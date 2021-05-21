import React from "react";
import { Container, Image, Navbar } from "react-bootstrap";

import {
  PageHeader,
  PageContainerLogo,
  Logo,
  PageContainerInput,
  PageContainerAvatar,
  Avatar,
  Username,
  InputSearch,
} from "./styles";

import "./styles.css";

const Header: React.FC = () => {
  return (
    <>
      <PageHeader>
        <PageContainerLogo>
          <Logo src="/logo.svg" alt="Logo Alura Dev" />
        </PageContainerLogo>
        <PageContainerInput>
          <InputSearch type="text" placeholder="Busque por algo" />
        </PageContainerInput>
        <PageContainerAvatar>
          <Avatar
            src="https://avatars.githubusercontent.com/u/38232335?v=4"
            alt="Foto de perfil"
          />
          <Username>Wesley</Username>
        </PageContainerAvatar>
      </PageHeader>
      <Navbar className="page-header d-none">
        <Navbar.Brand href="#home" className="page__container">
          <img src="/logo.svg" className="img-fluid" alt="Logo Alura Dev" />
        </Navbar.Brand>
        <input
          type="text"
          placeholder="Busque por algo"
          className="page-search"
        />
        <div className="page__container page__container__avatar">
          <Image
            src="https://avatars.githubusercontent.com/u/38232335?v=4"
            className="page__avatar"
            roundedCircle
          />
          <p className="page__name">Wesley</p>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
