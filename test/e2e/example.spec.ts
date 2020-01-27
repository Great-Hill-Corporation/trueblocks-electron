import { Application } from 'spectron';
import * as electronPath from 'electron';
import * as path from 'path';

jest.setTimeout(10000);

describe('Main window', () => {
  let app: Application;

  beforeEach(() => {
    app = new Application({
      path: electronPath.toString(),
      args: [path.join(__dirname, '..', '..')]
    });

    return app.start();
  });

  afterEach(() => {
    if (app.isRunning()) {
      return app.stop();
    }
  });

  it('opens the window', async () => {
    const { client, browserWindow } = app;

    await client.waitUntilWindowLoaded();
    const title = await browserWindow.getTitle();

    expect(title).toBe('Webpack App');
  });

  it('increments the footer', async () => {
    const { client } = app;

    await client.waitUntilWindowLoaded();
    await client.click('#increment');

    const footerText = await client.getText('#footer-value');

    expect(footerText).toBe('Current value: 1');
  });

  it('decrements the footer', async () => {
    const { client } = app;

    await client.waitUntilWindowLoaded();
    await client.click('#decrement');

    const footerText = await client.getText('#footer-value');

    expect(footerText).toBe('Current value: -1');
  });

  it('resets the footer', async () => {
    const { client } = app;

    await client.waitUntilWindowLoaded();
    await client.click('#reset');

    const footerText = await client.getText('#footer-value');

    expect(footerText).toBe('Current value: 10');
  });
});
