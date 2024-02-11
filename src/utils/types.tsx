export interface Currency {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface PassengerType {
  uid: string;
  caption: string;
}

export interface Fare {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface FareBasis {
  ADULT: string;
}

export interface Luggage {
  pieces: number;
  nil: boolean;
  unit: string;
}

export interface Airline {
  uid: string;
  caption: string;
  airlineCode: string;
}

export interface Airport {
  uid: string;
  caption: string;
}

export interface TravelDuration {
  duration: number;
}

export interface Service {
  uid: string;
  caption: string;
}

export interface Aircraft {
  uid: string;
  caption: string;
}

export interface ServicesDetails {
  freeCabinLuggage: object;
  paidCabinLuggage: object;
  tariffName: string;
  fareBasis: FareBasis;
  freeLuggage: { [key: string]: Luggage };
  paidLuggage: object;
}

export interface Segment {
  classOfServiceCode: string;
  classOfService: Service;
  departureAirport: Airport;
  departureCity: Airport;
  aircraft: Aircraft;
  travelDuration: number;
  arrivalCity: Airport;
  arrivalDate: string;
  flightNumber: string;
  techStopInfos: any[];
  departureDate: string;
  stops: number;
  servicesDetails: ServicesDetails;
  airline: Airline;
  starting: boolean;
  arrivalAirport: Airport;
  operatingAirline?: Airline;
}

export interface Leg {
  duration: number;
  segments: Segment[];
}

export interface Refundable {
  refundableBeforeDeparture: boolean;
  refundableAfterDeparture: boolean;
}

export interface Refund {
  ADULT: Refundable;
}

export interface Exchangeable {
  exchangeableBeforeDeparture: boolean;
  exchangeAfterDeparture: Currency;
  exchangeBeforeDeparture: Currency;
  exchangeableAfterDeparture: boolean;
}

export interface Exchange {
  ADULT: Exchangeable;
}

export interface SeatType {
  uid: string;
  caption: string;
}

export interface Seat {
  count: number;
  type: SeatType;
}

export interface BaggageServiceStatus {
  uid: string;
  caption: string;
}

export interface ServiceStatuses {
  baggage: BaggageServiceStatus;
  exchange: BaggageServiceStatus;
  refund: BaggageServiceStatus;
}

export interface Price {
  total: Currency;
  totalFeeAndTaxes: Currency;
  rates: {
    totalUsd: Currency;
    totalEur: Currency;
  };
  passengerPrices: {
    total: Currency;
    passengerType: PassengerType;
    singlePassengerTotal: Currency;
    passengerCount: number;
    tariff: Fare;
    feeAndTaxes: Fare;
  }[];
}

export interface Flight {
  carrier: Airline;
  price: Price;
  servicesStatuses: ServiceStatuses;
  legs: Leg[];
  exchange: Exchange;
  isTripartiteContractDiscountApplied: boolean;
  international: boolean;
  seats: Seat[];
  refund: Refund;
}

export interface FlightInfo {
  hasExtendedFare: boolean;
  flight: Flight;
  flightToken: string;
}
