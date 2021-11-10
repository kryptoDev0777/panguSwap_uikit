import React from "react";
import { Handler } from "./types";
declare const useModal: (modal: React.ReactNode, closeOnOverlayClick?: boolean, updateOnPropsChange?: boolean, modalId?: string) => [Handler, Handler];
export default useModal;
