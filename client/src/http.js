import axios from "axios";
import dotenv from "dotenv"

dotenv.config();

export default axios.create({
    baseURL: process.env.baseURL,
    headers: {
        "Content-type": "application/json"
    }
})
