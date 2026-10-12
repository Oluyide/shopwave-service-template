const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');
const { handler } = require('../src/server');

function get(path) {
  return new Promise((resolve) => {
    const srv = http.createServer(handler).listen(0, () => {
      http.get({ port: srv.address().port, path }, (res) => {
        let body = '';
        res.on('data', (c) => (body += c));
        res.on('end', () => { srv.close(); resolve({ status: res.statusCode, body: JSON.parse(body) }); });
      });
    });
  });
}

test('health check reports ok', async () => {
  const res = await get('/health');
  assert.strictEqual(res.status, 200);
  assert.strictEqual(res.body.status, 'ok');
});

test('home route says hello', async () => {
  const res = await get('/');
  assert.match(res.body.message, /Hello from/);
});
