import React from "react";
import { SpaceProps } from "styled-system";
export declare const variants: {
    readonly WARNING: "warning";
    readonly DANGER: "danger";
};
export declare type Variant = typeof variants[keyof typeof variants];
export interface MessageProps extends SpaceProps {
    variant: Variant;
    icon?: React.ReactNode;
}
