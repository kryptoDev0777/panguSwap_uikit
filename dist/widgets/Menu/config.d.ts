import { LinkStatus } from "./types";
export declare const status: {
    LIVE: LinkStatus;
    SOON: LinkStatus;
    NEW: LinkStatus;
};
export declare const links: ({
    label: string;
    icon: string;
    href: string;
    items?: undefined;
    status?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
    status?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    status: LinkStatus;
    items?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    status: LinkStatus;
    items: ({
        label: string;
        href: string;
        status: LinkStatus;
    } | {
        label: string;
        href: string;
        status?: undefined;
    })[];
    calloutClass: string;
    href?: undefined;
})[];
export declare const socials: {
    label: string;
    icon: string;
    href: string;
}[];
export declare const MENU_HEIGHT = 64;
export declare const MENU_ENTRY_HEIGHT = 48;
export declare const SIDEBAR_WIDTH_FULL = 240;
export declare const SIDEBAR_WIDTH_REDUCED = 56;
