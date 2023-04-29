const axios = require("axios");
const { get } = require("lodash");

const callApi = async () => {
  const url = "https://reqres.in/api/movie";
  try {
    const response = await axios.get(url);
    console.log(get(response, "data", "Not Found"));
  } catch (error) {
    console.error(error);
  }
};

callApi();
