import axios from 'axios'

const app = axios.create({
    baseURL: "http://127.0.0.1:6071"
})

export default app;