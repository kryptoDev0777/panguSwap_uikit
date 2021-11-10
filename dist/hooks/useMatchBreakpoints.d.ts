declare type State = {
    [key: string]: boolean;
};
declare type BreakpointChecks = {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
} & State;
declare const useMatchBreakpoints: () => BreakpointChecks;
export default useMatchBreakpoints;
