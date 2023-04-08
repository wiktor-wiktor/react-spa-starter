import React from "react";

import styles from "./button.module.scss";

interface ButtonProps {
  caption: string;
  primary?: boolean;
}

export const Button = ({ caption, primary }: ButtonProps) => {
  return (
    <button
      className={`${primary ? styles.primary : styles.secondary} ${
        styles.button
      }`}
    >
      {caption}
    </button>
  );
};
