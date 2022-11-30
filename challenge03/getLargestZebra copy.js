const getLargestZebra = async (colorsFile) => {
  let validZebra = [];
  let lastValidZebraColor;
  let counter = 0;
  let zebrasFounded = [];
  let largestZebra = [];

  colorsFile.forEach((color, i) => {
    if (validZebra.length < 2) {
      console.info(`current index zebra config`, i);
      console.info(validZebra);
      console.info("---");

      if (validZebra.length === 0) {
        validZebra.push(color);
        lastValidZebraColor = color;
        counter++;
      } else if (validZebra.length === 1) {
        if (validZebra[0] !== color) {
          counter++;
        } else {
          validZebra = [];
          counter = 1;
        }

        validZebra.push(color);
        lastValidZebraColor = color;

        zebrasFounded.push({
          index: i,
          counter,
          lastValidZebraColor,
          validZebra,
        });
      }
    } else {
      if (validZebra.length === 2) {
        if (validZebra[0] !== validZebra[1]) {
          if (i % 2 === 0) {
            if (validZebra[0] === color) {
              counter++;
              lastValidZebraColor = color;

              zebrasFounded.push({
                index: i,
                counter,
                lastValidZebraColor,
                validZebra,
                // largestZebra,
              });
            } else {
              if (i < colorsFile.length - 1) {
                console.info(
                  `PRE-RESET EVEN\n\nZebra: ${validZebra}\nLast valid: ${lastValidZebraColor}\ni: ${i}\nCurrent color: ${color}\n`
                );

                let auxZebra = [...validZebra];
                auxZebra.push(color);
                largestZebra.push(auxZebra);

                zebrasFounded.push({
                  index: i,
                  counter,
                  lastValidZebraColor,
                  validZebra,
                  // largestZebra,
                });

                // validZebra = [lastValidZebraColor, color];
                lastValidZebraColor = color;
                validZebra = [];
                validZebra.push(color);
                // lastValidZebraColor = color;
                // counter = 1;
                counter = 1;
              }
            }
          } else {
            if (validZebra[1] === color) {
              counter++;
              lastValidZebraColor = color;

              zebrasFounded.push({
                index: i,
                counter,
                lastValidZebraColor,
                validZebra,
                // largestZebra,
              });
            } else {
              if (i < colorsFile.length - 1) {
                console.info(
                  `PRE-RESET ODD\n\nZebra: ${validZebra}\nLast valid: ${lastValidZebraColor}\ni: ${i}\nCurrent color: ${color}\n`
                );

                let auxZebra = [...validZebra];
                auxZebra.push(color);
                largestZebra.push(auxZebra);

                zebrasFounded.push({
                  index: i,
                  counter,
                  lastValidZebraColor,
                  validZebra,
                  // largestZebra,
                });

                // validZebra = [lastValidZebraColor, color];
                lastValidZebraColor = color;
                validZebra = [validZebra[0], color];
                // validZebra.push(color);
                // lastValidZebraColor = color;
                // counter = 1;
                counter = 2;
              }
            }
          }
        }
      }
    }
  });

  console.info("FOUNDED");
  console.info(zebrasFounded);
  console.info(JSON.stringify(largestZebra));

  return {
    counter,
    lastValidZebraColor,
  };
};

export { getLargestZebra };
