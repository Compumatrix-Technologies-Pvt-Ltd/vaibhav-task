import axios from 'axios';

export const callDogsData = async (Endpoint : string) => {
  try {
    const response = await axios.get(Endpoint)
      .then(response => {  return response.data; })
      .catch(error => {
        console.log(error);
        return error;
      });
    return  response;
  } catch (error) {
    // console.log(error.message || error);
  }
};
