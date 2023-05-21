import express from "express";
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/hello", (req, res) => {
  res.send("hello world");
});
const port: any = 4000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
