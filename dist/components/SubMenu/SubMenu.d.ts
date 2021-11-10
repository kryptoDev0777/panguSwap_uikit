import React from "react";
import { Placement, Padding } from "@popperjs/core";
export interface SubMenuProps {
    component: React.ReactNode;
    options?: {
        placement?: Placement;
        offset?: [number, number];
        padding?: Padding;
    };
}
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
