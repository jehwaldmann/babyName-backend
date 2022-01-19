const express = require("express");
const app = express();
const { postgrator } = require("./lib/db");
// const notFoundMiddleware = require("./middlewares/not-found");
// const errorHandlerMiddleware = require("./middlewares/errorHandler");
const cors = require("cors");
const usersRoute = require("./routes/userRoute");
const babyNamesRoute = require("./routes/babyNamesRoute");

app.use(express.json());
app.use(cors());

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);


app.use('/users', usersRoute);
app.use("/savedBaby", babyNamesRoute);


const port = process.env.PORT || 4000;
console.log("port variable", port);
const start = async () => {
  try {
    postgrator.migrate().then((result) => {
      console.log(`migrated db successfully:`, result);
      app.listen(port, () => {
        console.log(`server is listening at http://localhost:${port}`);
      });
    });
  } catch (err) {
    console.log(err);
  }
};

start();
