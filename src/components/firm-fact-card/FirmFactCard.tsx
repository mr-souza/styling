import { Button } from "../button/Button";
import styles from "./FirmFactCard.module.scss";

interface FirmFactCardProps {
  variant: string;
  buttonVariant: string;
  label: string;
  disabled: boolean;
}
export function FirmFactCard({
  variant,
  buttonVariant,
  label,
  disabled,
}: FirmFactCardProps) {
  return (
    <div className={`${styles.container} ${styles[variant || "default"]}`}>
      <Button variant={buttonVariant} disabled={disabled}>
        <span>{label}</span>
      </Button>
    </div>
  );
}
