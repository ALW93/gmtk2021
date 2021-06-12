import React from "react";
import classNames from "classnames";
import images from "../../images/images";

const Item = ({ id, type, name, onClick }) => {
  return (
    <div className="itemContainer">
      <img
        src={images[id]}
        alt={name}
        data-id={id}
        data-name={name}
        onClick={onClick}
        className={classNames("absoluteCenter")}
      />
      <p className={classNames({ ["hidden"]: type === "potion" })}>{name}</p>
    </div>
  );
};

export default Item;
