import { getLargestZebra } from "./getLargestZebra.js";

(async () => {
  const colorsFile = await fetch("https://codember.dev/colors.txt")
    .then((response) => response.json())
    .catch((err) => console.error(err));

  const zebra = await getLargestZebra(colorsFile);

  console.log(
    "\x1b[36m%s\x1b[33m",
    "Codember Challenge #3 answer:\n",
    `submit ${zebra.counter}@${zebra.lastValidZebraColor}`
  );

  // TODO: Debug
  // ! 29@red is wrong, the answer is 30@red
})();
