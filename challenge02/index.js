import { fetchTextFile } from "../utils/fetchTextFile.js";

const getEncryptedMessage = async () => {
  const encryptedFile = await fetchTextFile(
    "https://codember.dev/encrypted.txt"
  );

  const filteredMessage = encryptedFile?.split(" ");

  const message = filteredMessage?.reduce((accumulator, current) => {
    let message = "";
    const codes = current.trim().split("");

    while (codes.length > 0) {
      let currentASCIICode = [];
      if (codes[0] == 1) {
        currentASCIICode = codes.splice(0, 3);
      } else if (codes[0] == 9) {
        currentASCIICode = codes.splice(0, 2);
      }

      message += getASCIIValue(currentASCIICode);
    }

    return accumulator + message + " ";
  }, "");

  return message?.trim();
};

const getASCIIValue = (arr) => {
  if (!arr || arr.length === 0) {
    return "";
  }

  const code = arr.reduce((accumulator, current) => {
    return accumulator + current;
  });

  return String.fromCharCode(code);
};

(async () => {
  const messages = await getEncryptedMessage();

  console.log(
    "\x1b[36m%s\x1b[33m",
    "Codember Challenge #2 answer:\n",
    `submit ${messages}`
  );
})();
