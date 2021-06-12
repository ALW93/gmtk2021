import { BrowserRouter, Route } from "react-router-dom";

import Game from "./components/Game";
import StartMenu from "./components/StartMenu";
import Music from "./components/Music";

function App() {
  return (
    <BrowserRouter>
      <Music />
      <Route path="/game" exact={true}>
        <Game />
      </Route>
      <Route path="/" exact={true}>
        <StartMenu />
      </Route>
    </BrowserRouter>
  );
}

export default App;
