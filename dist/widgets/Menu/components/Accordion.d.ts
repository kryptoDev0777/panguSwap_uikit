import React, { ReactNode } from "react";
import { LinkStatus, PushedProps } from "../types";
interface Props extends PushedProps {
    label: string;
    status?: LinkStatus;
    icon: React.ReactElement;
    initialOpenState?: boolean;
    className?: string;
    children: ReactNode;
    isActive?: boolean;
}
declare const Accordion: React.FC<Props>;
export default Accordion;
