import React from "react";
import axios from "axios";

const api = axios.create({
    baseURL : 'http://172.18.111.93:3000/'
})

export default api;