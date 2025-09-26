import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        if (response.data) {
            return 1;
        } else {
            return Promise.reject(response.data.message || "接口错误");
        }
    },
    (error) => {
        if (error.response) {
            console.error("接口错误:", error.response.status);
        } else {
            console.error("网络错误:", error.message);
        }
        return Promise.reject(error);
    }
);
export default instance;
