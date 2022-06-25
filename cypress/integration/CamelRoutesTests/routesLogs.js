console.log("Test");

describe("Routes Logs", function () {
  before(function () {
    cy.log("This code will be executed once before any test Routes excution");
  });

  beforeEach(function () {
    cy.log("This code is executed before any test Route execution");
  });

  context("Context #1", function () {
    it("should be a #1 dummy test using IT", function () {
      console.log("#1 Test");
    });
  });
  context("Context #2", function () {
    specify.skip("should be a #2 dummy test using SPECIFY", function () {
      console.log("#2 Test");
    });
  });

  context("Specified Logs For Routes", function () {
    specify.only("Logs Of Routes", function () {
      console.log("#3 Test");
    });
  });

  afterEach(function () {
    cy.log("This code is executed after any test Route execution");
  });

  after(function () {
    cy.log("This code will be executed once all test Routes execution is done");
  });
});
