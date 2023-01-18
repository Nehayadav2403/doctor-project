import axios from "axios";

export const serverUrl = "http://localhost:8000/api";

const getApiHandler = async (endpoint) => {
  try {
    const getData = await axios.get(serverUrl + endpoint, {
      headers: {
        "Content-Type": "text/plain",
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log("getData:", getData);
    return getData;
  } catch (err) {
    return err.response.data;
  }
};

const postApiHandler = async (endpoint, value) => {
  try {
    const postData = await axios.post(serverUrl + endpoint, value);
    return postData.data;
  } catch (err) {
    console.log(err);
  }
};

const putApiHandler = async (endpoint, value) => {
  console.log("Object ID====>", endpoint);
  try {
    const putData = await axios.put(serverUrl + endpoint, value);
    console.log("putData:", putData);
    return putData;
  } catch (err) {
    console.log(err);
  }
};

const deleteApiHandler = async (endpoint) => {
  try {
    const deleteData = await axios.delete(serverUrl + endpoint);
    console.log("deleteData:", deleteData);
    return deleteData;
  } catch (err) {
    console.log(err);
  }
};
export { postApiHandler, getApiHandler, putApiHandler, deleteApiHandler };
