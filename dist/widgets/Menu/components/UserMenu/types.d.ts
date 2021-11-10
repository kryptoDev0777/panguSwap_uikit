import { FlexProps } from "styled-system";
export declare const variants: {
    readonly DEFAULT: "default";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
    readonly PENDING: "pending";
};
export declare type Variant = typeof variants[keyof typeof variants];
export interface UserMenuProps extends FlexProps {
    account?: string;
    text?: string;
    avatarSrc?: string;
    variant?: Variant;
}
export interface UserMenuItemProps {
    disabled?: boolean;
}
