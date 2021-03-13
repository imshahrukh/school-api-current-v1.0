const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const axios = require("axios");

const csv = require("csv-parser");
const fs = require("fs");

// Router
const memeberRouter = require("./router/member_router");
const villageRouter = require("./router/village_router");
const submittedAmountRouter = require("./router/submittedAmount_router");
const donationHistoryRouter = require("./router/donationHistory_router");
const amountRouter = require("./router/amount_router");
const allocateRouter = require("./router/allocateAmount_router");
const annualAllocatedRouter = require("./router/annual_submitted_amount");
const loginAdmin = require("./router/login_router");
// create Application
const app = express();
// Json MiddleWare to recive the JSON data
app.use(express.json());
app.use(cors());
// port
const port = process.env.PORT || 9000;
// Mango DB Connection
mongoose
  .connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(console.log("Database connected..."))
  .catch((er) => console.log(er));

// Route Router

app.post("/login", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      token: Math.floor(Math.random() * 100000),
      data: {
        login: req.body,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
});

// Middle-Ware Router
app.use("/v1", memeberRouter);
app.use("/v1", villageRouter);
app.use("/v1", submittedAmountRouter);
app.use("/v1", donationHistoryRouter);
app.use("/v1", amountRouter);
app.use("/v1", allocateRouter);
app.use("/v1", annualAllocatedRouter);
app.use("/v1", loginAdmin);
// Listen
app.listen(port, () => {
  console.log("server Activited");
});

// To add list of Member in the MonogDBAltls
// const f_read = () => {
//   fs.createReadStream("list.csv")
//     .pipe(csv())
//     .on("data", (row) => {
//       sendData(row.name, row.village, "0" + row.number);
//     })
//     .on("end", () => {
//       console.log("CSV file successfully processed");
//     });
// };

// const sendData = async (name, village, ph) => {
//   const data = {
//     name: name,
//     village_Name: village,
//     personal_phon: ph,
//     relative_phon: "",
//     data_of_joining: "2020-07-01",
//     status: "",
//     memberShip_status: false,
//   };
//   const url = "http://localhost:9000/v1/member";
//   let res = await axios.post(url, data);
//   let { status } = res.data;
//   console.log(status);
// };
