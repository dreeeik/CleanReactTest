import { httpPostParams } from "@/data/protocols/http";
import axios from "axios";

export class AxiosHttpClient {
  async post(params: httpPostParams<Response>): Promise<void> {
    await axios.post(params.url);
  }
}
