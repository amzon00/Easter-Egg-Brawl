const fetchData = async (setData) => {
  try {
    await fetch("http://localhost:5000/api/v1/eggs")
      .then((res) => res.json())
      .then((responseJSON) => {
        setData(responseJSON);
      });
  } catch (err) {
    throw new Error(err);
  }
};

export default fetchData;
