export declare const variants: {
    readonly ROUND: "round";
    readonly FLAT: "flat";
};
export declare const scales: {
    readonly MD: "md";
    readonly SM: "sm";
};
export declare type Scale = typeof scales[keyof typeof scales];
export declare type Variant = typeof variants[keyof typeof variants];
export interface ProgressProps {
    variant?: Variant;
    scale?: Scale;
    primaryStep?: number;
    secondaryStep?: number;
    showProgressBunny?: boolean;
}
