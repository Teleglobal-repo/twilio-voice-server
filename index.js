const express = require("express");
const app = express();

app.get("/voice", (req, res) => {
  const twiml = `
  <Response>
    <Start>
      <Stream url="wss://u4qe4l9ct5.execute-api.ap-south-1.amazonaws.com/production/stream"/>
    </Start>
    <Say>Hello! I am your EMI assistant. How can I help you today?</Say>
  </Response>
  `;
  res.type("text/xml");
  res.send(twiml);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
