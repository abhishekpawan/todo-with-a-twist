import { FC } from "react";

interface IButtton {
  text: string;
  type: 'underline' | 'box';
  onClick: () => void;
  isActive: boolean;
  isDisabled?: boolean;
}

const Button: FC<IButtton> = ({
  text,
  onClick,
  isActive,
  isDisabled = false,
  type
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn-primary ${isActive && "active"} ${type}`}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
