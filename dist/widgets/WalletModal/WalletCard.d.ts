import React from "react";
import { ButtonProps } from "../../components/Button";
import { Login, Config } from "./types";
interface Props {
    walletConfig: Config;
    login: Login;
    onDismiss: () => void;
}
interface MoreWalletCardProps extends ButtonProps {
    t: (key: string) => string;
}
export declare const MoreWalletCard: React.FC<MoreWalletCardProps>;
declare const WalletCard: React.FC<Props>;
export default WalletCard;
