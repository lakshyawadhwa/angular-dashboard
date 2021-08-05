export interface masterConcern {
  concernId: number;
  concernName: string;
}

export interface clientObject {
  clientId: number;
  clientName: string;
  clientMobile: number;
  clientEmail: string;
  clientDisplayPic: string;
  clientPOC: string;
  occupation: clientOccupation;
  password: string;
  expires: string;
}

export interface clientOccupation {
  occupationId: number;
  occupationName: string;
}
