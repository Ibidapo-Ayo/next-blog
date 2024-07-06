import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-gray-100", "hover:bg-gray-200"],
      ghost: [
        "hover:bg-blue-600",
        "dark:text-gray-100",
        "hover:text-gray-100",
        "text-gray-700",
        "border",
        "hover:border-none",
        "outline-none",
      ],
    },
    size: {
      default: [" rounded", "p-2"],
      tags: [
        "rounded-full",
        "flex",
        "items-center",
        "justify-center",
        "px-3.5",
        "py-1",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = ({ variant, size, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
};

export default Button;
