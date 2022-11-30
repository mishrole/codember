import { getLargestZebra } from "./getLargestZebra";

/*
  ['red', 'blue', 'red', 'blue', 'green'] -> 4, blue                                ✔
  ['green', 'red', 'blue', 'gray'] -> 2, gray                                       ✔
  ['blue', 'blue', 'blue', 'blue'] -> 1, blue                                       ✔
  ['red', 'green', 'red', 'green', 'red', 'green'] -> 6, green                      ✔
  ['blue', 'red', 'blue', 'red', 'gray'] -> 4, red                                  ✔
  ['red', 'red', 'blue', 'red', 'red', 'red', 'green'] -> 3, red                    ✔
  ['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green'] -> 6, green       ✔
  */

test("['red', 'blue', 'red', 'blue', 'green'] Should return 4, blue", async () => {
  const colors = ["red", "blue", "red", "blue", "green"];
  const result = await getLargestZebra(colors);
  expect(result).toEqual(
    expect.objectContaining({
      counter: 4,
      lastValidZebraColor: "blue",
    })
  );
});

test("['green', 'red', 'blue', 'gray'] Should return 2, gray", async () => {
  const colors = ["green", "red", "blue", "gray"];
  const result = await getLargestZebra(colors);
  expect(result).toEqual(
    expect.objectContaining({
      counter: 2,
      lastValidZebraColor: "gray",
    })
  );
});

test("['blue', 'blue', 'blue', 'blue'] Should return 1, blue", async () => {
  const colors = ["blue", "blue", "blue", "blue"];
  const result = await getLargestZebra(colors);
  expect(result).toEqual(
    expect.objectContaining({
      counter: 1,
      lastValidZebraColor: "blue",
    })
  );
});

test("['red', 'green', 'red', 'green', 'red', 'green'] Should return 6, green", async () => {
  const colors = ["red", "green", "red", "green", "red", "green"];
  const result = await getLargestZebra(colors);
  expect(result).toEqual(
    expect.objectContaining({
      counter: 6,
      lastValidZebraColor: "green",
    })
  );
});

test("['blue', 'red', 'blue', 'red', 'gray'] Should return 4, red", async () => {
  const colors = ["blue", "red", "blue", "red", "gray"];
  const result = await getLargestZebra(colors);
  expect(result).toEqual(
    expect.objectContaining({
      counter: 4,
      lastValidZebraColor: "red",
    })
  );
});

test("['red', 'red', 'blue', 'red', 'red', 'red', 'green'] Should return 3, red", async () => {
  const colors = ["red", "red", "blue", "red", "red", "red", "green"];
  const result = await getLargestZebra(colors);
  expect(result).toEqual(
    expect.objectContaining({
      counter: 3,
      lastValidZebraColor: "red",
    })
  );
});

test("['red','blue','red','green','red','green','red','green'] Should return 6, green", async () => {
  const colors = [
    "red",
    "blue",
    "red",
    "green",
    "red",
    "green",
    "red",
    "green",
  ];
  const result = await getLargestZebra(colors);
  expect(result).toEqual(
    expect.objectContaining({
      counter: 6,
      lastValidZebraColor: "green",
    })
  );
});
