import { DefaultTheme } from "styled-components";
import { Colors } from "../../theme";
import { StyledDropdownMenuItemProps } from "./types";
export declare const DropdownMenuItem: import("styled-components").StyledComponent<"button", DefaultTheme, StyledDropdownMenuItemProps & {
    $isActive: boolean;
}, never>;
export declare const StyledDropdownMenuItemContainer: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const DropdownMenuDivider: import("styled-components").StyledComponent<"hr", DefaultTheme, {}, never>;
export declare const StyledOverlay: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const StyledDropdownMenu: import("styled-components").StyledComponent<"div", DefaultTheme, {
    $isOpen: boolean;
    $isBottomNav: boolean;
}, never>;
export declare const LinkStatus: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Text").TextProps & {
    color: keyof Colors;
}, never>;
