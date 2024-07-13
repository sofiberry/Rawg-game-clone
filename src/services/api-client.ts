import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "00566c69e4ca4f79bc3d9eb249804195",
  },
});
