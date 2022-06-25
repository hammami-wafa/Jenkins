///<reference types = "Cypress" />

describe("get api accounts preferences", () => {
  it("get accounts", () => {
    cy.request({
      method: "GET",
      url: "http://10.2.140.245:8090/COBRO/rest/accounts/preferences",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwbzIzZkVXRjJsNUMyZFF5a2lXZHI3OG1WUzhURkFIWktCNDVkNWVwd1JNIn0.eyJleHAiOjE2NTIyODQzMjQsImlhdCI6MTY1MjE5NzkyNCwianRpIjoiZTZlNGM4M2EtMzc4ZC00MzE3LTg3ODctNjM3NDAyMjU1OWJjIiwiaXNzIjoiaHR0cDovLzEwLjIuMTQwLjI0NTo4MTgwL2F1dGgvcmVhbG1zL1Zlcm1lZyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2YzJjMDAxNC04ODYwLTQ0MDMtOTZjZS1hZDM1N2ViMTkwYjYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwdWJsaWMtY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6IjQ4MzU3ZDY1LTRkODctNDBmYy1hNjk5LTkxMTc5ZjYyNmU0YiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiYWxsIiwiTWVnYXJhIiwib2ZmbGluZV9hY2Nlc3MiLCJhZG1pbiIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiIiwicm9sZXMiOlsiYWxsIiwiTWVnYXJhIiwib2ZmbGluZV9hY2Nlc3MiLCJhZG1pbiIsInVtYV9hdXRob3JpemF0aW9uIl0sInByZWZlcnJlZF91c2VybmFtZSI6InNhIn0.C7TAZX6xFV1mKLEFhvYFQDV-n5xNg8aqQXbpgUvGr6rq4JyKiTboLgS3WL0XOk4LclSHVw9Rcx6ZLOO4mXhUuZAEWjKuThykHnnwwUF4I0K7ACv_5r-wRWhqTbz-hJIbeGxCPyWfwAxEZFKb2QH7ayQ_MVIKhxuXRbrlOw2hqzQIPAjxnCg9vGFl0ID5wrzlyNTrfwsls2mKn2IRzFypUDTm5wN69SaH7U7c1raRRGy6iqFeBbXaYH04rBJftk_1jvvoC8sUZVXL3xagVD8A0uz0L_2GfbhreReptO3_VkQVws4QkiGs16E6ZJ1orKN8PpH_SWBeAViiX_esROuzyw",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body);
    });
  });

  it("get accounts by id", () => {
    cy.request({
      method: "GET",
      url: "http://10.2.140.245:8090/COBRO/rest/collateralStaticDatas/1",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwbzIzZkVXRjJsNUMyZFF5a2lXZHI3OG1WUzhURkFIWktCNDVkNWVwd1JNIn0.eyJleHAiOjE2NTIyODQzMjQsImlhdCI6MTY1MjE5NzkyNCwianRpIjoiZTZlNGM4M2EtMzc4ZC00MzE3LTg3ODctNjM3NDAyMjU1OWJjIiwiaXNzIjoiaHR0cDovLzEwLjIuMTQwLjI0NTo4MTgwL2F1dGgvcmVhbG1zL1Zlcm1lZyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI2YzJjMDAxNC04ODYwLTQ0MDMtOTZjZS1hZDM1N2ViMTkwYjYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwdWJsaWMtY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6IjQ4MzU3ZDY1LTRkODctNDBmYy1hNjk5LTkxMTc5ZjYyNmU0YiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiYWxsIiwiTWVnYXJhIiwib2ZmbGluZV9hY2Nlc3MiLCJhZG1pbiIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiIiwicm9sZXMiOlsiYWxsIiwiTWVnYXJhIiwib2ZmbGluZV9hY2Nlc3MiLCJhZG1pbiIsInVtYV9hdXRob3JpemF0aW9uIl0sInByZWZlcnJlZF91c2VybmFtZSI6InNhIn0.C7TAZX6xFV1mKLEFhvYFQDV-n5xNg8aqQXbpgUvGr6rq4JyKiTboLgS3WL0XOk4LclSHVw9Rcx6ZLOO4mXhUuZAEWjKuThykHnnwwUF4I0K7ACv_5r-wRWhqTbz-hJIbeGxCPyWfwAxEZFKb2QH7ayQ_MVIKhxuXRbrlOw2hqzQIPAjxnCg9vGFl0ID5wrzlyNTrfwsls2mKn2IRzFypUDTm5wN69SaH7U7c1raRRGy6iqFeBbXaYH04rBJftk_1jvvoC8sUZVXL3xagVD8A0uz0L_2GfbhreReptO3_VkQVws4QkiGs16E6ZJ1orKN8PpH_SWBeAViiX_esROuzyw",
      },
    }).then((res) => {
      expect(res.body.code).to.eq("1");
    });
  });
});

describe("My first test", () => {
  it("Does not do much", () => {
    expect(true).to.equal(true);
  });
});

describe("My simple test", () => {
  it("Does not do much", () => {
    const typedText = "admin";
    cy.visit("http://10.2.140.245:8090/COBRO");
    cy.get(".login > .input").type("admin");
  });
});

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;
describe("Unit testing for our dummy application", () => {
  //It -> Used for an individual test cases. Receives two parameters, one the name as string explaining what the test will do,
  //and the second one is the call back function

  //Specify is also an alias of it, and we can use it in the same way.

  context("math with POSITIVE numbers", () => {
    it("Should add Numbers", () => {
      expect(add(1, 2)).to.eq(3);
    });

    it("Should Subtract Numbers", () => {
      expect(subtract(2, 1)).to.eq(1);
    });

    it("Should Multiply Numbers", () => {
      expect(multiply(2, 2)).to.eq(4);
    });

    it("Should Divide Numbers", () => {
      expect(divide(4, 2)).to.eq(2);
    });
  });

  context("math with DECIMAL numbers", () => {
    it("Should Add Numbers", () => {
      expect(add(2.2, 2.2)).to.eq(4.4);
    });

    it("Should Subtract Numbers", () => {
      expect(subtract(4.4, 2.2)).to.eq(2.2);
    });
  });
});

