import React from "react";
import { Handler } from "./types";
interface ModalsContext {
    isOpen: boolean;
    nodeId: string;
    modalNode: React.ReactNode;
    setModalNode: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    onPresent: (node: React.ReactNode, newNodeId: string) => void;
    onDismiss: Handler;
    setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const Context: React.Context<ModalsContext>;
declare const ModalProvider: React.FC;
export default ModalProvider;
