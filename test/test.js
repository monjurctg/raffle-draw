const myDB = require("../db/db");

myDB.create("user 1", 10);
myDB.create("user 2", 10);
myDB.create("user 3", 10);
myDB.create("user 4", 10);
myDB.create("user 5", 10);
myDB.create("user 6", 10);
myDB.create("user 7", 10);
myDB.create("user 8", 10);
const bulk = myDB.bulkCreate("test", 10, 3);
// console.log(bulk, "bulk");

const tickets = myDB.find();
// console.log("all Tickets", tickets);
// console.log(myDB.findById("LuiWNkSEjx"));
const winners = myDB.draw(3);
// console.log("winner", winners);
