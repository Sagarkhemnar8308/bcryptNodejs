const express = require("express");
const app = express();

const body=require('body-parser');
const  bcrypt=require('bcryptjs');

app.use(body.json());
const PORT = 4300;
const authRoutes=require('./routes/authenticate.routes')

function healthcheck(req, resp) {
  resp.status(200).json({
    message: "Server is running",
    status: "success",
    code: 200,
  });
}

app.use('/auth',authRoutes);

app.get("/healthcheck", healthcheck);

app.listen(PORT, () => {
  console.log("Server is started......");
});
