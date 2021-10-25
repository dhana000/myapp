import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

// dummy login
import { login } from "./redux";

import Home from "./pages/Home";
import Search from "./pages/Search";
import SessionDetail from "./pages/SessionDetail";
import Main from "./pages/Main";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Navigation from "./components/Navigation/Navigation";
import BottomNavigation from "./components/Navigation/BottomNavigation";
import Login from "./pages/login";
import Profile from "./pages/Profile";
import ScrollToTop from "./components/ScrollToTop";
import HostSession from "./pages/HostSession";
import Sessions from "./pages/Sessions";
import EditProfile from "./pages/EditProfile";
import PaymentSettings from "./pages/PaymentSettings";
import Security from "./pages/Security";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  color: ${(props) => props.theme.onBackground};
`;

const theme = {
  primary: "#06D6A0",
  background: "#ffffff",
  onBackground: "#222222",
  onSecondary: "#717171",
  border: "#dddddd",
  shadow: "#f5f5f5",
  footer: "#f7f7f7",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop>
          <AppContainer>
            <Navigation />
            <Switch>
              <Route path="/session/:sessionId">
                <SessionDetail />
              </Route>
              <Route path="/account/notifications">
                <Notifications />
              </Route>
              <Route exact path="/account/settings/editProfile">
                <EditProfile />
              </Route>
              <Route exact path="/account/settings/payments">
                <PaymentSettings />
              </Route>
              <Route exact path="/account/settings/security">
                <Security />
              </Route>
              <Route path="/account/settings">
                <Settings />
              </Route>
              <Route path="/hostsession">
                <HostSession />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/sessions">
                <Sessions />
              </Route>
              <Route exact path="/:username">
                <Profile />
              </Route>
              <Route path="/">{login ? <Home /> : <Main />}</Route>
            </Switch>
            <BottomNavigation />
          </AppContainer>
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
