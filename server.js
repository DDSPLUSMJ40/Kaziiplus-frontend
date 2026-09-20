const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'kazii-full-demo.html'));
});

// Real creator storefront links look like kaziiplus.com/<slug> -- there's no
// static file at that path, so fall back to the app; it reads the URL path
// on load and fetches the real storefront data client-side.
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'kazii-full-demo.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Kazii+ frontend listening on port ${PORT}`);
});
