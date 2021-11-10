import React from "react";
import { Colors } from "../../theme";
import { Language } from "./types";
import { Position } from "../Dropdown/types";
import { Scale } from "../Button/types";
interface Props {
    currentLang: string;
    langs: Language[];
    setLang: (lang: Language) => void;
    color: keyof Colors;
    dropdownPosition?: Position;
    buttonScale?: Scale;
    hideLanguage?: boolean;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
