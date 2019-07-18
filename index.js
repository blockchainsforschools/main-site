const express = require("express");
const app = express();
const port = 8081;

app.get("/", (req, res) => {
  res.send("Site currently under construction!");
});

app.get("/about", (req, res) => {
  res.send("Will host our nonprofit cause.");
});

app.get("/team", (req, res) => {
  res.send(
    "Will show all team members. Execs first, followed by members. Potential React use here"
  );
});

app.get("/announcements", (req, res) => {
  res.send("Will show announcements.");
});

app.get("/blog", (req, res) => {
  res.send("Will show blogs, complete with pictures and stuff.");
});

app.listen(port, () => console.log(`Port running on ${port}`));
