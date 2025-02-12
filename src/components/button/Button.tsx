import { ReactNode } from "react";

import SearchIcon from "../../assets/icons/search";
import styles from "./Button.module.scss";

interface ButtonProps {
  variant: string;
  disabled: boolean;
  children: ReactNode;
}

export function Button({ variant, disabled = false, children }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant || "default"]}`}
      disabled={disabled}
    >
      {variant === "icon" && (
        <div className={styles.icon}>
          <SearchIcon />
        </div>
      )}
      {children}
    </button>
  );
}
