import React from "react";
import { Colors } from "../../theme";
import { BoxProps } from "../Box";
export interface DropdownMenuProps extends BoxProps {
    items?: DropdownMenuItems[];
    activeItem?: string;
    isBottomNav?: boolean;
    openMenuTimeout?: number;
    showItemsOnMobile?: boolean;
}
export interface StyledDropdownMenuItemProps extends React.ComponentPropsWithoutRef<"button"> {
    disabled?: boolean;
    isActive?: boolean;
}
export declare enum DropdownMenuItemType {
    INTERNAL_LINK = 0,
    EXTERNAL_LINK = 1,
    BUTTON = 2,
    DIVIDER = 3
}
export interface LinkStatus {
    text: string;
    color: keyof Colors;
}
export interface DropdownMenuItems {
    label?: string | React.ReactNode;
    href?: string;
    onClick?: () => void;
    type?: DropdownMenuItemType;
    status?: LinkStatus;
    disabled?: boolean;
}
