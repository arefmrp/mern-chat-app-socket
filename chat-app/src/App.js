import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import ChatRoom from "./Pages/ChatRoom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact>
          <Login></Login>
        </Route>
        <Route  path={'/login'}>
          <Login></Login>
        </Route>
        <Route  path={'/chatroom'}>
          <ChatRoom></ChatRoom>
        </Route>
        <Route path={''}>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
