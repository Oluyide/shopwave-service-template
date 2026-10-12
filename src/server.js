const http = require('node:http');

const SERVICE = process.env.SERVICE_NAME || 'shopwave-service';
const PORT = Number(process.env.PORT) || 8080;

function handler(req, res) {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok', service: SERVICE }));
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: `Hello from ${SERVICE}` }));
}

const server = http.createServer(handler);
if (require.main === module) {
  server.listen(PORT, () => console.log(`${SERVICE} listening on port ${PORT}`));
}

module.exports = { handler, server };
