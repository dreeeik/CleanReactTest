/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpPostClient,
  httpPostParams,
  HttpResponse,
} from "@/data/protocols/http";
import axios from "axios";

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post(params: httpPostParams<Response>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body);
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
