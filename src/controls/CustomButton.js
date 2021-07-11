import { Button } from "@material-ui/core";
import React from "react";

export const CustomButton = (props) => {
  const { variant, color, text, onClick, size, name } = props;
  return (
    <Button name={name} variant={variant || "contained"} color={color || "primary"} onClick={onClick} size={size || "medium"} {...props}>
      {text}
    </Button>
  );
};
