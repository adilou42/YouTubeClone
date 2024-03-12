import { cva } from "class-variance-authority";
import React from "react";

const buttonStyles = cva(["transition-colors"], {
	variants: {
		size: {
			default: ["bg-secondary", "hover:bg-secondary-hover"],
			ghost: ["hover:bg-gray-100"],
			icon: [
				"roudend-full",
				"w-10",
				"h-10",
				"flex",
				"items-center",
				"justify-center",
				"p-2.5",
			],
		},
	},
});

const Button = () => {
	return <div>Button</div>;
};

export default Button;
