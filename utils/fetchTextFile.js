const fetchTextFile = async (url) => {
  const result = await fetch(url)
    .then((response) => response.text())
    .catch((err) => console.error(err));

  return result;
};

module.exports = { fetchTextFile };
