import React from 'react'
import { Link } from 'react-router-dom'

const StartMenu = () => {

    return(
        // the background image scaling is off, but will come back to it.
        <div className="startMenuContainer">
            <div className="startMenuHeaderContainer">
                <div className="startMenuHeader">Potion Matching Game</div>
            </div>
            <div className="optionsContainer">
                <div className="startMenuOptions">
                    <Link to={"/game"} className="link">Play</Link>
                    <Link to={"/tutorial"} className="link">Tutorial</Link>
                    <Link to={"/credits"} className="link">Credits</Link>
                </div>
            </div>
        </div>
    )
}

export default StartMenu
