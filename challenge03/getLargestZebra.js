// import fs from "fs";

const getLargestZebra = async (colorsFile) => {
  let validZebra = [];

  let currentValidZebras = [];
  let result = [];

  let allColors = [];

  const addNewValidZebra = (color, i) => {
    validZebra.push({
      color,
      index: i,
    });
  };

  const addToHistoricalValidZebras = (color, i) => {
    currentValidZebras.push({
      color: color,
      index: i,
    });
  };

  const resetValidZebra = (i) => {
    result.push(currentValidZebras);

    currentValidZebras = [];
    validZebra = [];
  };

  colorsFile.forEach((color, i) => {
    allColors.push({
      color,
      index: i,
    });

    if (validZebra.length < 2) {
      if (validZebra.length === 0) {
        addNewValidZebra(color, i);
        addToHistoricalValidZebras(color, i);
      } else {
        // First color was added, is the new color equals to the first one? If so, is not valid
        if (validZebra[0].color === color) {
          resetValidZebra(i);
        }

        // Add the current color
        // If the first color is not equal to current color, then this current color will be second color [previousColor, currentColor]
        // If the first color is equal to current color, then this current color will be the first color [currentColor]

        addNewValidZebra(color, i);
        addToHistoricalValidZebras(color, i);
      }
    } else {
      // There is two colors in validZebra, now we can check the rest of the array

      // Case 1: Zebra was found in a even pair
      //    0       1      2      3      4      5
      // ['red', 'red', 'red', 'blue', 'red', 'gray']
      // Zebra: [{ color: 'red', index: 2 }, { color: 'blue', index: 3 }]
      // Counter: 4 — Color Red
      // This color with index 4 (even) needs to be equals to zebra[0] (even) because zebra[0].index % 2 === 0 is true

      // Case 2: Zebra was found in a odd pair
      //    0       1      2      3      4
      // ['red', 'red', 'blue', 'red', 'gray']
      // Zebra: [{ color: 'red', index: 1 }, {color: 'blue', index: 2 }]
      // Counter: 3 — Color Red
      // This color with index 3 (odd) needs to be equals to zebra[0] (even) because zebra[0].index % 2 === 0 is false

      // * If zebra[0].index % 2 === 0 is true, even i needs to be compared with zebra[0] and odd i needs to be compared with zebra[1]
      // * If zebra[0].index % 2 === 0 is false, odd i needs to be compared with zebra[0] and even i needs to be compared with zebra[1]

      // ! If currentColor if not equal, then validZebra is an empty array and counter is reseted to zero
      // // ! If current i is even, color will be the first element of the new validZebra and counter is counter++

      if (validZebra[0].index % 2 === 0) {
        // Zebra was found in a even pair
        if (i % 2 === 0) {
          // Current i is even
          if (color === validZebra[0].color) {
            // Current color is equal to zebra[0].color
            addToHistoricalValidZebras(color, i);
          } else {
            // Current color is not equal to zebra[0].color, reset the validZebra
            resetValidZebra(i);
            // Add the current color as the new first zebra color and index
            addNewValidZebra(color, i);
            addToHistoricalValidZebras(color, i);
          }
        } else {
          // Current i is odd
          if (color === validZebra[1].color) {
            // Current color is equal to zebra[1].color
            addToHistoricalValidZebras(color, i);
          } else {
            // Current color is not equal to zebra[1].color, reset the validZebra
            resetValidZebra(i);
            // When i is odd, add the previous color as the new first zebra color and index, and the current color as the second zebra color
            const previousColor = colorsFile[i - 1];

            if (previousColor !== color) {
              addNewValidZebra(colorsFile[i - 1], i - 1);
              addNewValidZebra(color, i);

              addToHistoricalValidZebras(colorsFile[i - 1], i - 1);
              addToHistoricalValidZebras(color, i);
            } else {
              addNewValidZebra(color, i);
              addToHistoricalValidZebras(color, i);
            }
          }
        }
      } else {
        // Zebra was found in a odd pair
        if (i % 2 !== 0) {
          // Current i is odd
          if (color === validZebra[0].color) {
            // Current color is equal to zebra[0].color
            addToHistoricalValidZebras(color, i);
          } else {
            // Current color is not equal to zebra[0].color, reset the validZebra
            resetValidZebra(i);
            // When i is odd, add the previous color as the new first zebra color and index, and the current color as the second zebra color
            const previousColor = colorsFile[i - 1];

            if (previousColor !== color) {
              addNewValidZebra(colorsFile[i - 1], i - 1);
              addNewValidZebra(color, i);

              addToHistoricalValidZebras(colorsFile[i - 1], i - 1);
              addToHistoricalValidZebras(color, i);
            } else {
              addNewValidZebra(color, i);
              addToHistoricalValidZebras(color, i);
            }
          }
        } else {
          // Current i is even
          if (color === validZebra[1].color) {
            // Current color is equal to zebra[1].color
            addToHistoricalValidZebras(color, i);
          } else {
            // Current color is not equal to zebra[1].color, reset the validZebra
            resetValidZebra(i);
            // Add the current color as the new first zebra color and index
            addNewValidZebra(color, i);
            addToHistoricalValidZebras(color, i);
          }
        }
      }
    }

    if (i === colorsFile.length - 1) {
      result.push(currentValidZebras);
    }
  });

  // console.info("\n\nRESULT\n\n");
  // console.log(JSON.stringify(result));

  const orderedZebras = result.sort();

  // fs.writeFile(
  //   "./tmp/result.js",
  //   `let result = ${JSON.stringify(orderedZebras)}`,
  //   function (err) {
  //     if (err) {
  //       return console.info(err);
  //     }
  //   }
  // );
  // const filteredZebras = orderedZebras.filter((x) => x.length >= 29);

  // console.info(`Total Zebras: ${filteredZebras.length}`);

  const largestZebra = orderedZebras[result.length - 1];

  // console.info(
  //   "Last Valid Zebra Index",
  //   largestZebra[largestZebra.length - 1].index
  // );

  return {
    counter: largestZebra.length,
    lastValidZebraColor: largestZebra[largestZebra.length - 1].color,
  };
};

export { getLargestZebra };
