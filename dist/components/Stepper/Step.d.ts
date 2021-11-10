import React from "react";
import { StatusProps, StepProps } from "./types";
export declare const StepNumber: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StatusProps, never>;
/**
 * ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
 * One of the child is hidden based on the step number.
 */
export declare const Step: React.FC<StepProps>;
