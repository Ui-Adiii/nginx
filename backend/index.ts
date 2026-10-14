import express from "express"

const PORT = process.env.PORT || 5000
const app = express();

app.get("/", (req, res) => { 
  res.status(200).json({
    success: true,
    message: `From Server ${process.env.SERVER_NAME ? process.env.SERVER_NAME : "Default Server"}`,
  });
})
app.listen(PORT, () =>
  console.log(
    `From Server ${process.env.SERVER_NAME ? process.env.SERVER_NAME : "Default Server"}`,
  ),
);
