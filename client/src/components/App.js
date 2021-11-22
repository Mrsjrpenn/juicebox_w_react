import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div id="container">
          <div id="main-section">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/posts">
                <Posts />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/CreatePost">
                <CreatePost />
              </Route>
              <Route path="/LoginForm">
                <LoginForm />
              </Route>
              <Route path="/Posts">
                <Posts />
              </Route>
              <Route path="/RegisterForm">
                <RegisterFrom />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
