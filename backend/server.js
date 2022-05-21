const express = require("express");
const VoiceResponse = require("twilio").twiml.VoiceResponse;

const app = express();

app.post("/voice", (req, res) => {
  const twiml = new VoiceResponse();
  twiml.say(
    { voice: "man" },
    `this is apology. apology is not associated with the police or any other 
    organization. but rather as a way to tell people what you have done wrong and 
    how you feel about it. all statements received by apology will be played back 
    to the public so please do not identify yourself. talk for as long as 
    you want.`
  );
  twiml.record();

  twiml.hangup();

  res.type("text/xml");
  res.send(twiml.toString());
});

app.listen(1337);
