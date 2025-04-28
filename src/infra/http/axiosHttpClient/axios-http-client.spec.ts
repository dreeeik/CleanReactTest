import { faker } from "@faker-js/faker/.";
import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";
import { httpPostParams } from "@/data/protocols/http";

jest.mock("axios");
const user = {
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  address: faker.location.streetAddress(),
};

const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockPostRequest = (): httpPostParams<any> => ({
  url: faker.internet.url(),
  body: user,
});

describe("AxiosHttpClient", () => {
  test("Should call axios with correct values", async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
});
