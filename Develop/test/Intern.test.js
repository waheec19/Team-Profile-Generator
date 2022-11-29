const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UTDALLAS";
  const e = new Intern("Drake", 1, "Drake@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Drake", 1, "Drake@test.com", "UTDALLAS");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UTDALLAS";
  const e = new Intern("Drake", 1, "Drake@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
