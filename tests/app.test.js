const { setupStrapi, cleanupStrapi } = require("./helpers/strapi.js");

beforeAll(async () => {
  await setupStrapi();
});

afterAll(async () => {
  await cleanupStrapi();
});

it("strapi is defined", () => {
  throw("EEEE")
  expect(strapi).toBeDefined(); // eslint-disable-line
});
