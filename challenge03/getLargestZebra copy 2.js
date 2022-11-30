const getLargestZebra = async (colorsFile) => {
  let validZebra = [];
  let lastValidZebraColor;
  let counter = 0;
  let zebrasFounded = [];

  colorsFile.forEach((color, i) => {
    if (validZebra.length < 2) {
      if (validZebra.length === 0) {
        validZebra.push(color);
        lastValidZebraColor = color;
        counter++;

        zebrasFounded.push({
          index: i,
          counter,
          lastValidZebraColor,
          validZebra,
        });
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
              });
            } else {
              // ! Check this
              if (i < colorsFile.length - 1) {
                lastValidZebraColor = color;
                validZebra = [];
                validZebra.push(color);
                counter = 1;

                zebrasFounded.push({
                  index: i,
                  counter,
                  lastValidZebraColor,
                  validZebra,
                });
              } else {
                zebrasFounded.push({
                  index: i,
                  counter,
                  lastValidZebraColor,
                  validZebra,
                });
              }
            }

            console.info(
              `FINAL EVEN\n\nZebra: ${validZebra}\nLast valid: ${lastValidZebraColor}\ni: ${i}\nCurrent color: ${color}\nCounter: ${counter}\n----\n`
            );
          } else {
            console.info(
              `PRE ODD\n\nZebra: ${validZebra}\nLast valid: ${lastValidZebraColor}\ni: ${i}\nCurrent color: ${color}\nCounter: ${counter}\n----\n`
            );
            /*
              Case:
                Index: 3
                Current color: red
                validZebra: [ 'red', 'blue' ]

                It needs to be compared with validZebra[0] not validZebra[1]
              */
            if (validZebra[1] === color) {
              counter++;
              lastValidZebraColor = color;

              zebrasFounded.push({
                index: i,
                counter,
                lastValidZebraColor,
                validZebra,
              });
            } else {
              // ! Test 6 and 7 failed, 6 pass if counter is set to 3, and 7 pass if counter is set to 2
              counter = 0;
              lastValidZebraColor = color;
              validZebra = [validZebra[0], color];
              counter += 2;

              zebrasFounded.push({
                index: i,
                counter,
                lastValidZebraColor,
                validZebra,
              });
            }

            console.info(
              `FINAL ODD\n\nZebra: ${validZebra}\nLast valid: ${lastValidZebraColor}\ni: ${i}\nCurrent color: ${color}\nCounter: ${counter}\n----\n`
            );
          }
        }
      }
    }
  });

  console.info("FOUNDED");
  console.info(zebrasFounded);

  return {
    counter,
    lastValidZebraColor,
  };
};

export { getLargestZebra };
