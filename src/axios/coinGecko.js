import axios from "axios";
const baseURL = "https://api.coingecko.com/api/v3"
const coinGecko = axios.create({
  baseURL: `${baseURL}`,
});

export default coinGecko;