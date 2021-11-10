/// <reference types="react" />
import { ImageProps, Variant } from "./types";
interface StyledImageProps extends ImageProps {
    variant: Variant;
}
export declare const StyledPrimaryImage: import("styled-components").StyledComponent<import("react").FC<ImageProps>, import("styled-components").DefaultTheme, StyledImageProps, never>;
export declare const StyledSecondaryImage: import("styled-components").StyledComponent<import("react").FC<ImageProps>, import("styled-components").DefaultTheme, StyledImageProps, never>;
export {};
