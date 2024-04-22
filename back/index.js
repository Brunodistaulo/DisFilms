const dbCon = require("./src/config/dbCon.js");
const server = require("./src/server.js");
const puerto = 3000;

dbCon().then((res) => {
  server.listen(puerto, () => {
    console.log(`http://localhost:${puerto}`);
  });
});
