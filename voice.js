export default function handler(req, res) {
  const twiml = `
  <Response>
    <Start>
      <Stream url="wss://u4qe4l9ct5.execute-api.ap-south-1.amazonaws.com/production/stream"/>
    </Start>
    <Say>Hello! I am your EMI assistant. How can I help you today?</Say>
  </Response>
  `;
  
  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(twiml);
}
