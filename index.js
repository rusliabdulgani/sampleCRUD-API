const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3005;

const user = require("./routes");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/user", user);

app.listen(port, () => {
  console.log(`aplikasi node js contoh jalan ${port}`);
});
