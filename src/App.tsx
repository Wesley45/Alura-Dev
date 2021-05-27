import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import Header from "./src/components/Header";
import Sidebar from "./src/components/Sidebar";
import { PageContainer } from "./src/pages/Home/styles";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <PageContainer>
        <Router>
          <Sidebar />
          <Switch>
            {routes.map((route, index) => (
              <Route exact key={index} path={route.path} component={route.component} />
            ))}
          </Switch>
        </Router>
      </PageContainer>
      <GlobalStyle />
    </div>
  );
};

export default App;
