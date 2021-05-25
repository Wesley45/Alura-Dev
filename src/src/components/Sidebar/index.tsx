import React from "react";
import { Link, useLocation } from "react-router-dom";

import { ListMenu, ListMenuItem, MenuContainer } from "./styles";
import Routes from "./../../../routes";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <MenuContainer>
      <p>Menu</p>
      <ListMenu>
        {Routes.map((route, key) => (
          <ListMenuItem key={key} active={route.path === location.pathname}>
            <Link to={route.path}>
              <div>{route.icon}</div>
              <span>{route.sidebarName}</span>
            </Link>
          </ListMenuItem>
        ))}
      </ListMenu>
    </MenuContainer>
  );
};

export default Sidebar;
