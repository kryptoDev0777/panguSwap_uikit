import { FlexProps } from "../Box";
export declare type SubMenuItemsType = {
    label: string;
    href: string;
};
export interface SubMenuItemsProps extends FlexProps {
    items: SubMenuItemsType[];
    activeItem?: string;
}
