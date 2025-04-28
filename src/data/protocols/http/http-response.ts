export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  unathorized = 401,
  badRequest = 400,
  notFound = 404,
  serverEror = 500,
}

export type HttpResponse = {
  statusCode: HttpStatusCode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
};
