const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({message: "Hello Docker.i am nodejs Container 👋🏻"});
});

app.get("/count", async (req, res) => {
  let count = 0;
  const uservalue = parseInt(req.body.uservalue); // Parse the uservalue from the request body

  if (isNaN(uservalue)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  for (let i = 0; i < uservalue; i++) {
    console.log(i);
    count += i;
  }

  return res.status(200).json({ message: `Your Count Value is: ${count}` });
});


app.listen(PORT, () => {
  console.log(`Server is Running At the Port no : ${PORT}`);
});
