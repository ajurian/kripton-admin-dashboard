import { VariantProps } from "class-variance-authority";
import { ButtonProps as BaseButtonProps } from "react-aria-components";
import buttonVariants from "./buttonVariants";

type ButtonVariants = NonNullableField<VariantProps<typeof buttonVariants>>;

interface ButtonProps extends BaseButtonProps, ButtonVariants {}
