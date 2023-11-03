import React from "react";
import Button from "../../common/Button";
import "./button.scss";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Subscribed",
    "Music",
    "Live",
    "Motivation",
    "Mixes",
    "Podcasts",
  ];
  return (
    <div className="button-list">
      {buttonList.map((button) => (
        <Button name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
