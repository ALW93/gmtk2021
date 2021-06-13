import React from "react";
import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";

const LightBox = ({ onClick, children }) => {
  return (
    <div className="lightBoxContainer--Outer">
      <div className="lightBoxContainer--Inner" onClick={onClick}>
        <Icon
          style={{ position: "absolute", right: "0" }}
          onClick={onClick}
          path={mdiClose}
          title="User Profile"
          size={2}
          horizontal
          vertical
          rotate={90}
          color="black"
        />
        {children}
      </div>
    </div>
  );
};

export default LightBox;
