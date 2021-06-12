import React from "react";
import classNames from "classnames";
import images from "../../images/images";

import useSound from "use-sound";
import softClick from "../../music/softclick.mp3"

const Item = ({ id, type, name, onClick }) => {
  const [playSoft] = useSound(softClick)

  return (
    <div className="itemContainer">
      <img
        src={images[id]}
        alt={name}
        data-id={id}
        data-name={name}
        onClick={onClick}
        className={classNames("absoluteCenter")}
        onMouseEnter={playSoft}
      />
      <p className={classNames({ hidden: type === "potion" })}>{name}</p>
    </div>
  );
};

export default Item;
