const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const routes = require('./controllers');

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(routes);
// app.use(require('./controllers/htmlRoutes'));
// app.use(require('./controllers/api/workoutRoute'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
