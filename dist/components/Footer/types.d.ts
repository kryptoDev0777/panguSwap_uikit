import { Language } from "../LangSelector/types";
import { FlexProps } from "../Box";
export declare type FooterLinkType = {
    label: string;
    items: {
        label: string;
        href?: string;
        isHighlighted?: boolean;
    }[];
};
export declare type FooterProps = {
    items: FooterLinkType[];
    buyCakeLabel: string;
    isDark: boolean;
    toggleTheme: (isDark: boolean) => void;
    cakePriceUsd?: number;
    currentLang: string;
    langs: Language[];
    setLang: (lang: Language) => void;
} & FlexProps;
