export declare type EventStatus = "past" | "live" | "upcoming";
export declare type Event = {
    status: EventStatus;
    text: string;
    altText?: string;
    infoText?: string;
};
export declare type TimelineProps = {
    events: Event[];
    useDark?: boolean;
};
