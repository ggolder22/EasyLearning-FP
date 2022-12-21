const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { test } = require("./src/Routes/test/controllers.js");
const PORT = require("./src/config.js")

conn.sync({ force: false }).then(async () => {
  await test();
  server.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
  });
  // await axios.post("http://localhost:3001/test");
});
