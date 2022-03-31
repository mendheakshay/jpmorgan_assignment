export interface FlightModel {
    id: string;
    FlightCode: string,
    SeatsAvailable: string,
    class: string,
    OriginDestination: {
        Origin: string,
        Destination: string,
        DeptDate: string,
        ArrDate: string
    },
    FareDetails: string
}