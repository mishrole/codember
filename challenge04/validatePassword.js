const validatePassword = async (password) => {
  // Has 5 digits
  // Has at least 2 5's
  // Digits are in ascending order

  return (
    password.toString()?.length === 5 &&
    password.toString()?.match(/5/g)?.length >= 2 &&
    password.toString()?.split("")?.sort()?.join("") === password.toString()
  );
};

export { validatePassword };
