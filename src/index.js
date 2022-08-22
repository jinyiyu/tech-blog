const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const connection = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 4006;

const hbs = exphbs.create({});

const app = express();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

const init = async () => {
  try {
    //connect to the DB
    await connection.sync({ force: false });

    //listen to the PORT
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`[Error]:Failed to start server | ${error.message}`);
  }
};

init();
