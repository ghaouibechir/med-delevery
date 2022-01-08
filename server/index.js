const { event, user,medecine } = require("./database-mongodb/schemas");


var express = require("express");
var app = express();
const passport = require("passport");
var port = process.env.PORT || 5000;
var cors = require("cors");
const users = require("./routes/users");

require("./config/passport")(passport);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/medecine", async (req, res) => {
  try {
    let foundMedcine = await medecine.find({});
    res.send(foundMedcine);
  } catch (error) {
    res.send(error);
  }
});

app.use("/users", users);

app.listen(process.env.PORT || port, () => {
  console.log(`Express server listening on  ${port}`);
});
