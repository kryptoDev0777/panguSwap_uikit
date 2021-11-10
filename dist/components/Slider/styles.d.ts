import { InputHTMLAttributes } from "react";
interface SliderLabelProps {
    progress: string;
}
interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
    isMax: boolean;
}
interface DisabledProp {
    disabled?: boolean;
}
export declare const SliderLabelContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const SliderLabel: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../Text").TextProps & SliderLabelProps, never>;
export declare const BunnyButt: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DisabledProp, never>;
export declare const BunnySlider: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, StyledInputProps, never>;
export declare const BarBackground: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DisabledProp, never>;
export declare const BarProgress: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, DisabledProp, never>;
export {};
