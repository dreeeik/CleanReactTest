import { faker } from "@faker-js/faker/.";
import axios from "axios";

export const user = {
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  address: faker.location.streetAddress(),
};

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.post.mockResolvedValue({
    data: user,
    status: faker.number,
  });

  return mockedAxios;
};
