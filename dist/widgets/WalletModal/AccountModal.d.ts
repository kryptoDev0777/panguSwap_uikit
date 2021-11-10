import React from "react";
interface Props {
    account: string;
    logout: () => void;
    onDismiss?: () => void;
    t: (key: string) => string;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
