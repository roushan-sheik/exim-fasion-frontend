import React from "react";
import { Button } from "../button";

interface EximButtonProps {
  children?: React.ReactNode; // Content inside the button
  className?: string; // Additional CSS classes
  type?: "button" | "submit" | "reset"; // Button type
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Click event handler
}

const EximButton: React.FC<EximButtonProps> = ({
  children,
  className = "", // Default to an empty string
  type = "button", // Default button type
  onClick,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={`bg-[#2053f8] hover:bg-[#3469fb] ${className}`}
    >
      {children}
    </Button>
  );
};

export default EximButton;
