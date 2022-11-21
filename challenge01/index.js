import { fetchTextFile } from "../utils/fetchTextFile.js";

const VALID_USER_PROPERTIES = ["usr", "eme", "psw", "age", "loc", "fll"];

const getUsers = async () => {
  const usersFile = await fetchTextFile("https://codember.dev/users.txt");

  const filteredUsers = usersFile
    .split("\n\n")
    .map((userLine) => userLine.replaceAll("\n", " ").split(" "));

  const formattedUsers = filteredUsers.map((usersArray) => {
    return usersArray.reduce((acc, current) => {
      const properties = current.split(":");

      return {
        ...acc,
        [properties[0]]: properties[1],
      };
    }, {});
  });

  return formattedUsers.filter((user) => isValidUser(user));
};

const isValidUser = (user) => {
  const userProperties = Object.keys(user);

  return VALID_USER_PROPERTIES.every((property) =>
    userProperties.includes(property)
  );
};

(async () => {
  const users = await getUsers();

  console.log(
    "\x1b[36m%s\x1b[33m",
    "Codember Challenge #1 answer:",
    `submit ${users.length}${users[users.length - 1].usr}`
  );
})();
