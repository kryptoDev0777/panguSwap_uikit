export declare const tags: {
    H1: string;
    H2: string;
    H3: string;
    H4: string;
    H5: string;
    H6: string;
};
export declare const scales: {
    readonly MD: "md";
    readonly LG: "lg";
    readonly XL: "xl";
    readonly XXL: "xxl";
};
export declare type Tags = typeof tags[keyof typeof tags];
export declare type Scales = typeof scales[keyof typeof scales];
export interface HeadingProps {
    as?: Tags;
    scale?: Scales;
}
