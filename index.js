const mongoose = require("mongoose");
const centreStaff = require("./CentreStaff");
const Person = require("./Person");
const Registrycentre = require("./RegistryCentre");

// For connect to database
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
  console.log("Connected to MongoDB");
}



// const person1 = new Person({
//   Name: "ThachPhamVan",
//   DateOfBirth: "2003-11-23",
//   SSN: 123,
//   Phone: 1231231231,
// });
// const centre = new RegistryCentre({
//   name: "hanoi",
//   Address: "odayne",
//   Hotline: 0889826866,
//   hotMail: "hanoi@hotmail.com",
//   Staff: [],
// });
// const user1 = new CentreStaff({
//   data: person1,
//   email: "phamvanthach2003@gmail.com",
//   password: "23112003",
// });
// centre.Staff.push(user1);

// // await centre.save();
// // console.log(centre);
// person1
//   .save()
//   .then((data) => {
//     console.log("Person1 Added.");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });
// centre
//   .save()
//   .then((data) => {
//     console.log("centre Added.");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });
// user1
//   .save()
//   .then((data) => {
//     console.log("User Added.");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });
