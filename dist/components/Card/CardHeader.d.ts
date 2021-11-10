import { SpaceProps } from "styled-system";
import { CardTheme } from "./types";
export interface CardHeaderProps extends SpaceProps {
    variant?: keyof CardTheme["cardHeaderBackground"];
}
declare const CardHeader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, CardHeaderProps, never>;
export default CardHeader;
