import Image from "next/image";
import React from "react";

interface IButtonProps {
  title: string;
  type: "button" | "submit";
  icon?: string;
  variant: "btn_dark_green";
  onClick: () => void;
}

const Button = (props: IButtonProps): JSX.Element => {
  const { title, type, icon, variant, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
