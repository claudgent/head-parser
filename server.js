
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Get request
app.get('/', (req, res) => {
  // get and parse OS info from user's get request header
  const userAgent = req.get('user-agent');
  const software = userAgent.match(/\(([^)]+)/).slice(1);

  // get and parse language from user's get request header
  const acceptLanguage = req.get('accept-language');
  const lang = acceptLanguage.match(/^(.+),/).slice(-1);

  // get ip address from user's request header
  const ip = req.ip;

  // respond with json object containing header information
  res.json({ ipAddress: ip,
    Software: software[0],
    Language: lang[0],
  });
});

// Start server
app.listen(port);
