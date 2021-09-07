export interface UserQuery {
  queryId: number;
  client: clientObject;
  horoId: number;
  queryText: string;
  queryCreateDatetime: string;
  queryUpdateDatetime: string;
  siteId: number;
  masterConcern: masterConcern;
  active: boolean;
  advisor?: advisorObject;
  location?: string;
  fileNo?: string;
}

export interface clientObject {
  clientId: number;
  clientName: string;
  clientMobile: string;
  clientEmail: string;
  clientDisplayPic: any;
  clientPOC: string;
  occupation: clientOccupation;
  password: string;
  address?: Address;
}

export interface advisorObject {
  advisorId: number;
  advisorName: string;
  advisorMobile: string;
  advisorEmail: string;
  password: string;
}
export interface Address {
  state: string;
  city: string;
  mobile: number;
  pincode: string;
  googleLocation: string;
  addressId: number;
  address: string;
  siteGeo: string;
  subCity: string;
  country: string;
}

export interface SiteInterface {
  siteId: number;
  siteName: string;
  siteType: siteTypeInterface;
  siteMapId: number;
  client: clientObject;
  conditionType: string;
  location: Location;
  plotArea: string; //sq. ft.
  coveredArea: string; //sq. ft.
  address: Address;
}
export interface AdviceResponse {
  dishabal: string | null;
  entrance: string | null;
  evaluation: string | null;
  level: string;
  site: SiteInterface;
  status: string | null;
  suggestions: string | null;
  typeOfEntrance: string | null;
  userQuery: UserQuery;
  zone: string;
}
export interface siteTypeInterface {
  siteTypeId: number;
  siteTypeName?: string;
}

export interface clientOccupation {
  occupationId: number;
  occupationName: string;
}

export interface masterConcern {
  concernId: number;
  concernName: string;
}

export interface SnackbarInterface {
  message: string;
  type: string;
}
