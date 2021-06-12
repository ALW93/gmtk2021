import {BrowserRouter, Route} from "react-router-dom"
import Game from "./components/Game";
import StartMenu from "./components/StartMenu"

function App() {
  return (
    <BrowserRouter>
      <Route path="/game" exact={true}>
        <Game/>
      </Route>
      <Route path="/" exact={true}>
        <StartMenu/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
