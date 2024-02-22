const getAllUsers = async () => {
  const response = await fetch(
    "https://javascript30js-default-rtdb.firebaseio.com/users/.json"
  );
  const data = await response.json();
  const formattedData = Object.keys(data).map((key) => ({
    key,
    ...data[key],
  }));
  console.log(formattedData);
  return formattedData;
};

const saveUser = async (userObject) => {
  const response = await fetch(
    "https://javascript30js-default-rtdb.firebaseio.com/users/.json",
    {
      method: "POST",
      body: JSON.stringify(userObject),
    }
  );
  const data = response.json();
  return data;
};

export { getAllUsers, saveUser };
