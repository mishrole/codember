import { validatePassword } from "./validatePassword.js";

const findPassword = async (minRangeValue, maxRangeValue, passwordIndex) => {
  let passwords = [];
  let newMinRange = minRangeValue + 1;

  for (let i = newMinRange; i < maxRangeValue; i++) {
    const result = await validatePassword(i);
    if (result) {
      passwords.push(i);
    }
  }

  return { total: passwords.length, password: passwords[passwordIndex] };
};

export { findPassword };
