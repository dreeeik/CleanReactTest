import { HttpResponse } from ".";

export type httpPostParams<T> = {
  url: string;
  body?: T;
};

export interface HttpPostClient<T, R> {
  post(params: httpPostParams<T>): Promise<HttpResponse<R>>;
}
