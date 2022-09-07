import axios from "axios";

export const fetchData = async (dataLink) => {
  let data = await axios.get(dataLink);
  let res = await data.data;
//   console.log(res);
  return res;
};
