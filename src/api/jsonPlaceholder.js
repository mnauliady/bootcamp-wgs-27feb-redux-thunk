import axios from "axios";

// fetching data posts dari jsonplaceholder
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
