import { faCode, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import Header from './src/components/Header';
import { ListMenuItem } from './src/components/Header/styles';
import Community from './src/pages/Community';
import Home from './src/pages/Home';
import {
  ListMenu,
  MenuContainer,
  PageContainer,
} from './src/pages/Home/styles';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <PageContainer>
        <Router>
          <MenuContainer>
            <p>Menu</p>
            <ListMenu>
              <ListMenuItem>
                <Link to="/">
                  <div>
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                  <span>Editor de código</span>
                </Link>
              </ListMenuItem>
              <ListMenuItem>
                <Link to="/community">
                  <div>
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <span>Comunidade</span>
                </Link>
              </ListMenuItem>
            </ListMenu>
          </MenuContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/community" component={Community} />
          </Switch>
        </Router>
      </PageContainer>
      <GlobalStyle />
    </div>
  );
};

export default App;
