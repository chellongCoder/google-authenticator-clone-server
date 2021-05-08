import "dotenv/config";
import cors from "cors";
import express from "express";

import { initAPIs } from './routes/api.js'

const app = express()

// Cho phép lý dữ liệu từ form method POST
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());

// Khởi tạo các APIs cho ứng dụng
initAPIs(app)

// app.get("/", (req, res) => {
//   return res.send("Received a GET HTTP method");
// });

// app.post("/", (req, res) => {
//   return res.send("Received a POST HTTP method");
// });

// app.put("/", (req, res) => {
//   return res.send("Received a PUT HTTP method");
// });

// app.delete("/", (req, res) => {
//   return res.send("Received a DELETE HTTP method");
// });

// app.listen(process.env.PORT, () =>
//   console.log(`Example app listening on port ${process.env.PORT}!`)
// );

// chọn một port mà bạn muốn và sử dụng để chạy ứng dụng tại local
const port = 3000
app.listen(port, () => {
  console.log(`Hello longnn.dev, I'm running at localhost:${port}/`)
}) 