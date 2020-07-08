export enum RequestMethods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export interface ApiMethodPayload {
  endpoint: string;
  body?: any;
  headers?: GenericHeaders;
}

export interface CreateRequestPayload {
  endpoint: string;
  method: string;
  body?: any;
  headers?: GenericHeaders;
}

export interface GenericHeaders {
  [key: string]: string;
}
