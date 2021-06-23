
import { BrowserRouter, Switch, Link, Route, useHistory } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Setting from "./pages/Setting";
import PageLink from "./components/PageLink";

function App() {
  let history = useHistory();
  const handleClick = () => {
    console.log(history);
    history.push("/");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/setting">Setting</Link></li>
        </ul>
        <ul>
          <li><PageLink to="/">Home</PageLink></li>
          <li><PageLink to="/about">About</PageLink></li>
          <li><PageLink to="/news">News</PageLink></li>
          <li><PageLink to="/setting">Setting</PageLink></li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
