// const { expect } = require("chai");

// function calc(a, b) {
//   return a + b;
// }

// function calsub(a, b) {
//   return a - b;
// }

// it("Test sum of 2 numbers", () => {
//   expect(calc(4, 5)).to.eql(9);
// });

// it.only("Test sub of 2 numbers", () => {
//   expect(calsub(10, 11)).to.eql(-1);
// });

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();

chai.use(chaiHttp);

/*
 * Test the /POST route
 */

describe("Login", () => {
  it("Should logged in with correct credientials", (done) => {
    let userCred = {
      email: "sourav@yoyo.com",
      password: "12345",
    };
    chai
      .request(server)
      .post("/auth/login")
      .send(userCred)
      .end((req, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.userId.should.eql("63c2f2055d2f221f3e422985");
        done();
      });
  });

  it("Should not logged in with correct credientials", (done) => {
    let userCred = {
      email: "invalid@example.com",
      password: "wrongPassworrd",
    };
    chai
      .request(server)
      .post("/auth/login")
      .send(userCred)
      .end((req, res) => {
        res.should.have.status(401);
        res.body.message.should.eql("User not found with this email");
        done();
      });
  });
});
