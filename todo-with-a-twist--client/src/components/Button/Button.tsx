import { FC } from "react";

interface IButtton {
  text: string;
  onClick: () => void;
  isActive: boolean;
  isDisabled?: boolean;
}

const Button: FC<IButtton> = ({
  text,
  onClick,
  isActive,
  isDisabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn-primary ${isActive && "active"}`}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
