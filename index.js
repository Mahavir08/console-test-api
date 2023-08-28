const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.post("/check", (req, res) => {
  try {
    console.log("req.body: ", req.body);
    res.status(200).send({
      success: true,
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
});

app.listen(8000, () => console.log("Connected To Port 8000"));
