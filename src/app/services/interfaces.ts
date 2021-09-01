export interface UserQuery {
  queryId: number;
  client: clientObject;
  horoId: number;
  queryText: string;
  queryCreateDatetime: string;
  queryUpdateDatetime: string;
  siteId: number;
  masterConcern: masterConcern;
  isActive: boolean;
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
  residenceLocation?: string;
  location?: Location;
}

export interface advisorObject {
  advisorId: number;
  advisorName: string;
  advisorMobile: string;
  advisorEmail: string;
  password: string;
}
export interface Location {
  state: string;
  city: string;
  subCity: string;
  mobile: number;
  pincode: number;
  googleLocation: string;
}
export interface SiteInterface {
  siteId: number;
  siteName: string;
  siteAddress: string;
  siteGeo: string;
  siteType: siteTypeInterface;
  siteMapId: number;
  client: clientObject;
  conditionType: string;
  location: Location;
  plotArea: number; //sq. ft.
  coveredArea: number; //sq. ft.
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
