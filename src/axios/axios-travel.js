import axios from "axios";

export default axios.create({
    baseURL: 'https://air-travel-e2e58-default-rtdb.firebaseio.com/'
})