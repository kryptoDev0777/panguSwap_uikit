import { DefaultTheme } from "styled-components";
import { CardProps } from "./types";
interface StyledCardProps extends CardProps {
    theme: DefaultTheme;
}
export declare const StyledCard: import("styled-components").StyledComponent<"div", DefaultTheme, StyledCardProps, never>;
export declare const StyledCardInner: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Box").BoxProps & {
    background?: string | undefined;
    hasCustomBorder: boolean;
}, never>;
export {};
