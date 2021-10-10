import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import userContext from "./Context/User.context";
import { useState, useMemo } from "react";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import {
  UserHome,
  CreatePost,
  AllPosts,
  SinglePost,
} from "./Components/User/index";

import { AllPublicPosts } from "./Components/Public/index";

function App() {
  const [user, setUser] = useState({});
  const providervalue = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [singleBlog, setSingleBlog] = useState();

  return (
    <div className="main">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <userContext.Provider value={providervalue}>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path={`/users/:user`} exact>
              <UserHome />
            </Route>
            <Route path={`/blog/:user/create`} exact>
              <CreatePost />
            </Route>
            <Route path={`/blog/:username/allposts`} exact>
              <AllPosts single={setSingleBlog} />
            </Route>
            <Route path={`/blog/public/posts/allposts`} exact>
              <AllPublicPosts />
            </Route>
            <Route path={`/blog/:user/post/:id`} exact>
              <SinglePost single={singleBlog} />
            </Route>
          </userContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
