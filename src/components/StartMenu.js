import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const StartMenu = ({setMusicPlaying}) => {
  const [entryState, setEntryState] = useState('begin')
  useEffect(() => {
    const entryStatus = sessionStorage.getItem('entryStatus')
    if(entryStatus === 'start'){
      setEntryState(entryStatus)
    }
  }, [])

  const handleBegin = () => {
    sessionStorage.setItem('entryStatus', 'start')
    setEntryState('start')
  }

  const handleClick = () => {
    debugger;
    setMusicPlaying(true)
  }

  return (
    <div className="startMenuContainer">
      <div className="startMenuHeaderContainer">
        <div className="startMenuHeader">Potion Matching Game</div>
      </div>
      { entryState === 'begin' ?
      <div className="beginContainer">
        <button onClick={handleBegin}>Begin</button>
      </div>
      :
      <div className="optionsContainer">
        <div className="startMenuOptions">
          <Link to={"/game"} className="link" onClick={handleClick}>
              Play
          </Link>
          <Link to={"/tutorial"} className="link">
            Tutorial
          </Link>
          <Link to={"/credits"} className="link">
            Credits
          </Link>
        </div>
      </div>}
    </div>
  );
};

export default StartMenu;
