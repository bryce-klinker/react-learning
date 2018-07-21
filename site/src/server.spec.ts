import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { server } from './server';

describe('Server', () => {
  beforeAll(() => {
    server.start();
  });

  afterAll(() => {
    server.stop();
  });

  it('should return index.html', async () => {
    const response = await fetch('http://localhost:4000');
    const indexContent = fs.readFileSync(path.resolve(__dirname, '..', 'dist', 'index.html'));

    expect(await response.text()).toBe(`${indexContent}`);
  });
});
