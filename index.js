import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Angel Backend LIVE 🚀🔥");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
