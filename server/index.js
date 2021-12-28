// // 'Import' the http module
// const http = require("http");
// // Initialize the http server
// const server = http.createServer((request, response) => {
//   // Handle the request from http://localhost:4040/status with HTTP GET method
//   if (request.url === "/status" && request.method === "GET") {
//     // Create the headers for response
//     response.writeHead(200, { "Content-Type": "application/json" });
//     // Create the response body
//     response.write(JSON.stringify({ message: "Service healthy like veggies" }));
//     // End and return the response
//     response.end();
//   }
// });
// // Tell the HTTP server to start listening
// server.listen(4040);

// // Let the humans know I am running and listening on 4040
// console.log("Listening on port 4040");

const dotenv = require("dotenv");
// 'Import' the Express module instead of http
const { response } = require("express");
const express = require("express");
// Initialize the Express application
const app = express();

dotenv.config();

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.send(
    JSON.stringify({ message: "Service is healthy like veggies!" })
  );
});

app.route("/forms").get((request, response) => {
  response.send(
    JSON.stringify({
      name: "Jane Doughnut",
      phone: "000-000-0000",
      address: "2345 Unicorn Street",
      city: "Happy",
      state: "Maine",
      zipCode: "12345",
      email: "janedoughnut@gmail.com",
      sessionInfo: "individual",
      date: "05/01/2022",
      startTime: "5pm",
      endTime: "7pm",
      numberOfPeople: "1",
      theme: "magical",
      packageType: "basic",
      addOns: "none",
      specialWishes: "Best way to contact me is via email"
    })
  );
});

app.post("/forms/:id", (request, response) => {
  const id = request.params.id;
  const body = request.body;
  // if (id === "error") {
  //   response.status(500).json({
  //     message: "Failed",
  //     error: "Because I said so!"
  //   });
  // } else {
  //   response.json({
  //     message: "Success",
  //     pizza_id: id
  //   });
  // }
  response.json({
    message: "Success",
    form_id: id,
    form_body: body
  });
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
