import { findPassword } from "./findPassword.js";

(async () => {
  const result = await findPassword(11098, 98123, 55);

  console.log(
    "\x1b[36m%s\x1b[33m",
    "Codember Challenge #4 answer:\n",
    `submit ${result.total}-${result.password}`
  );
})();
