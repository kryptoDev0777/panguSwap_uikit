import React from "react";
import { ModalProps } from "./types";
export declare const ModalHeader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    background?: string | undefined;
}, never>;
export declare const ModalTitle: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Box").BoxProps & import("../../components/Box").FlexProps, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Box").BoxProps & import("../../components/Box").FlexProps, never>;
export declare const ModalCloseButton: React.FC<{
    onDismiss: ModalProps["onDismiss"];
}>;
export declare const ModalBackButton: React.FC<{
    onBack: ModalProps["onBack"];
}>;
export declare const ModalContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, import("../../components/Box").BoxProps & {
    minWidth: string;
}, never>;
