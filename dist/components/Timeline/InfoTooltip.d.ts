import React from "react";
import { BoxProps } from "../Box";
declare type InfoTooltip = {
    text: string;
    iconColor?: string;
} & BoxProps;
declare const InfoTooltip: React.FC<InfoTooltip>;
export default InfoTooltip;
