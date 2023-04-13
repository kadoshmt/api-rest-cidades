import supertest from 'supertest';
import { Knex } from '../server/database/knex';
import { server } from '../server/Server';

beforeAll(async () => {
  await Knex.migrate.latest();
  await Knex.seed.run();
});

afterAll(async () => {
  await Knex.destroy();
});

export const testServer = supertest(server);