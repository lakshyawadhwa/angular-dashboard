export interface UserQuery {
  queryId: number;
  client: clientObject;
  horoId: number;
  queryText: string;
  queryCreateDatetime: string;
  queryUpdateDatetime: string;
  siteId: number;
  masterConcern: masterConcern;
}

export interface clientObject {
  clientId: number;
  clientName: string;
  clientMobile: string;
  clientEmail: string;
  clientDisplayPic: string;
  clientPOC: string;
  occupation: clientOccupation;
  password: string;
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
