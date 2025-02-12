import CloseIcon from "../../assets/icons/close";
import { FirmFactCard } from "../firm-fact-card/FirmFactCard";
import styles from "./FirmFacts.module.scss";
export function FirmFacts() {
  const cards = [
    {
      variant: "",
      buttonVariant: "icon",
      disabled: false,
      label: "This is a two line button that terminates with...",
    },
    {
      variant: "",
      buttonVariant: "icon",
      disabled: false,
      label: "This is a two line button that terminates with...",
    },
    {
      variant: "",
      buttonVariant: "",
      disabled: false,
      label: "This is a one line button",
    },
    {
      variant: "",
      buttonVariant: "icon",
      disabled: false,
      label: "This is a two line button that terminates with...",
    },
    {
      variant: "border",
      buttonVariant: "icon",
      disabled: false,
      label: "This is a two line button that terminates with...",
    },
    {
      variant: "border",
      buttonVariant: "icon",
      disabled: true,
      label: "This is a two line button that terminates with...",
    },
    {
      variant: "border",
      buttonVariant: "icon",
      disabled: false,
      label: "This is a two line button that terminates with...",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.close}>
        <CloseIcon />
      </div>
      <h1 className={styles.title}>Firm Facts</h1>
      <div className={styles.cards}>
        {cards.map((card) => (
          <FirmFactCard
            variant={card.variant}
            buttonVariant={card.buttonVariant}
            label={card.label}
            disabled={card.disabled}
          />
        ))}
      </div>
    </div>
  );
}
