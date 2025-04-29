/* eslint-disable @typescript-eslint/no-explicit-any */
import { faker } from "@faker-js/faker/.";
import { httpPostParams } from "../protocols/http";
import { user } from "@/infra/test";

export const mockPostRequest = (): httpPostParams<any> => ({
  url: faker.internet.url(),
  body: user,
});
