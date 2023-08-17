import React, { Children } from "react";

const Card = ({ width, height, children, padding, position }) => {
  let shadoweffect;

  const classNameForCard =
    "bg-white  rounded-xl shadow flex justify-center flex-col items-center gap-2.5 ";

  const cardStyle = {
    width: width + "em",
    height: height + "em",
    padding: padding + "em",
    position: position,
  };
  return (
    <div
      className={classNameForCard}
      style={cardStyle}
    >
      {children}
    </div>
  );
};

export default Card;
