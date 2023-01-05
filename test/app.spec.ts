import {beforeEach, describe, expect, test} from '@jest/globals';

describe('Get Environment variables', () => {
  beforeEach(async () => {
    require('dotenv').config();
  });

  test('ENV A is A.', () => {
    expect(process.env.ENV_VAR_A).toBe('A');
  });

  test('ENV B is B.', () => {
    expect(process.env.ENV_VAR_B).toBe('B');
  });
});
