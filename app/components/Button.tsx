import { cva } from "class-variance-authority";
import React from "react";

const buttonStyles = cva(["hover:bg-secondary-hover", "transition-colors"], {
	variants: {
		size: {
			default: [],
			icon: [],
		},
	},
});

const Button = () => {
	return <div>Button</div>;
};

export default Button;
