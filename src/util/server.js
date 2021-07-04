import axios from "axios";
import { authHeader } from "../helpers/authHeader";

export default axios.create({
    baseURL: "http://localhost:8080/sher777.com/",
    responseType: "json",
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': authHeader()
    }
});