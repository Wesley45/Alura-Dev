import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUsers } from "@fortawesome/free-solid-svg-icons";

import HomeComponent from "./src/pages/Home";
import CommunityComponent from "./src/pages/Community";

const Home: React.FC = () => {
  return (
    <Fragment>
      <HomeComponent />
    </Fragment>
  );
};

const Community: React.FC = () => {
  return (
    <Fragment>
      <CommunityComponent />
    </Fragment>
  );
};

const Routes = [
  {
    path: "/",
    sidebarName: "Editor de código",
    component: Home,
    icon: <FontAwesomeIcon icon={faCode} />,
  },
  {
    path: "/community",
    sidebarName: "Comunidade",
    component: Community,
    icon: <FontAwesomeIcon icon={faUsers} />,
  },
];

export default Routes;
