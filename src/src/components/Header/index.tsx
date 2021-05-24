import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';

import {
  PageHeader,
  PageContainerLogo,
  Logo,
  PageContainerInput,
  PageContainerAvatar,
  Avatar,
  Username,
  InputSearch,
  IconsContainer,
  Hamburger,
  Search,
  PageHeaderMobile,
  StyledBurger,
  ListMenu,
  ListMenuItem,
} from './styles';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOnClickMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <PageHeader>
        <PageContainerLogo>
          <Logo src="/logo.svg" alt="Logo Alura Dev" />
        </PageContainerLogo>
        <PageContainerInput>
          <InputSearch type="text" placeholder="Busque por algo" />
        </PageContainerInput>
        <PageContainerAvatar>
          <a href="">
            <Avatar
              src="https://avatars.githubusercontent.com/u/38232335?v=4"
              alt="Foto de perfil"
            />
            <Username>Wesley</Username>
          </a>
        </PageContainerAvatar>
        <IconsContainer>
          <Search>
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </Search>
          <Hamburger>
            <div>
              <StyledBurger open={open} onClick={handleOnClickMenu}>
                <div />
                <div />
                <div />
              </StyledBurger>
            </div>
          </Hamburger>
        </IconsContainer>
      </PageHeader>

      <PageHeaderMobile open={open}>
        <ListMenu>
          <ListMenuItem>
            <a href="">
              <div>
                <FontAwesomeIcon icon={faCode} />
              </div>
              <span>Editor de código</span>
            </a>
          </ListMenuItem>
          <ListMenuItem>
            <a href="">
              <div>
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <span>Comunidade</span>
            </a>
          </ListMenuItem>
        </ListMenu>
        <hr />

        <div>
          <Avatar
            src="https://avatars.githubusercontent.com/u/38232335?v=4"
            alt="Foto de perfil"
          />
          <Username>Wesley</Username>
        </div>
      </PageHeaderMobile>
    </header>
  );
};

export default Header;
