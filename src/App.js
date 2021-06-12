import {useState} from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Game from "./components/Game";
import StartMenu from "./components/StartMenu";
import Music from "./components/Music";

function App() {
  const [musicPlaying, setMusicPlaying] = useState(false)

  return (
    <BrowserRouter>
      <Music musicPlaying={musicPlaying} setMusicPlaying={setMusicPlaying}/>
      <Route path="/game" exact={true}>
        <Game />
      </Route>
      <Route path="/" exact={true}>
        <StartMenu setMusicPlaying={setMusicPlaying}/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
