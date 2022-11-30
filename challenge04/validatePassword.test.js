import { validatePassword } from "./validatePassword";

/*
55678 es correcto lo cumple todo
12555 es correcto, lo cumple todo
55555 es correcto, lo cumple todo
12345 es incorrecto, no tiene el 5 repetido.
57775 es incorrecto, los números no van de forma creciente
  */

test("55678 Should return true", async () => {
  const result = await validatePassword(55678);
  expect(result).toEqual(true);
});

test("12555 Should return true", async () => {
  const result = await validatePassword(12555);
  expect(result).toEqual(true);
});

test("55555 Should return true", async () => {
  const result = await validatePassword(55555);
  expect(result).toEqual(true);
});

test("12345 Should return false", async () => {
  const result = await validatePassword(12345);
  expect(result).toEqual(false);
});

test("57775 Should return false", async () => {
  const result = await validatePassword(57775);
  expect(result).toEqual(false);
});
