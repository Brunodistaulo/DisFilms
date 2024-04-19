const server = require("./src/server.js");

const puerto = 3000;

server.listen(puerto, ()=>{
    console.log(`http://localhost:${puerto}`)
})