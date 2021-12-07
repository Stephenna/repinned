import axios from "axios";
import dotenv from "dotenv"

dotenv.config();

export default axios.create({
    baseURL: process.env.baseURL ||"http://localhost:8080/",
    headers: {
        "Content-type": "application/json"
    }
})
