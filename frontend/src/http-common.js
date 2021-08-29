import axios from "axios";

// use to connect to the server (API)
export default axios.create({
  baseURL: "http://localhost:5000/api/booking",
  headers: {
    "Content-type": "application/json"
  }
});