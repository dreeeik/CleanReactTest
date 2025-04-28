import { faker } from "@faker-js/faker/.";
import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const url = faker.internet.url();

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

describe("AxiosHttpClient", () => {
  test("Should call axios with correct URL and verb", async () => {
    const sut = makeSut();
    sut.post({ url: url });
    expect(mockedAxios.post).toHaveBeenCalledWith(url);
  });
});
