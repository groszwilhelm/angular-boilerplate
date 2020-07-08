const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
let port = process.env.APP_PORT || 8080;

/**
 * API route that acts as a proxy for backend calls
 */
app.use('/api', createProxyMiddleware({
  // TODO: Change to correct backend route 😁
  target: 'http://our.awesome.backend/',
  changeOrigin: true,
  pathRewrite: { ['^/api']: '/' },
  secure: false
}));

/**
 * Route that serves Angular static files
 */
app.use(express.static(path.resolve(__dirname, '../client/dist/')));

app.listen(port, () => {
  console.log('[WebtechAndDragons] Server started listening on: ' + port);
});
