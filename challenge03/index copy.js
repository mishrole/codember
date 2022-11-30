const getLargestZebra = async () => {
  // const colorsFile = await fetch("https://codember.dev/colors.txt")
  //   .then((response) => response.json())
  //   .catch((err) => console.error(err));

  const colorsFile = ["red", "blue", "red", "blue", "gray"];
  let zebra = [];
  let counter = 0;

  colorsFile.forEach((color, index) => {
    if (index < 2) {
      zebra.push(color);
      counter++;
    }

    if (zebra.length === 2) {
      if (zebra[0] === zebra[1]) {
        counter = 1;
      }
    }

    if (i > 1) {
      if (i % 2 === 0) {
        if (zebra[zebra.length - 2] === color) {
          counter++;
        } else {
          counter = 1;
        }

        zebra.push(color);
      } else {
        if (zebra[zebra.length - 1] === color) {
          counter++;
        } else {
          counter = 1;
        }

        zebra.push(color);
      }
    }
  });

  return {
    counter,
    zebra,
  };
};

(async () => {
  const zebra = await getLargestZebra();

  console.log(
    "\x1b[36m%s\x1b[33m",
    "Codember Challenge #3 answer:\n",
    `submit ${zebra.counter} ${JSON.stringify(zebra.zebra)})}`
  );
})();
