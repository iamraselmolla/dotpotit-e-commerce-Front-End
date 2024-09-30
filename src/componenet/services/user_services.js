import http from "./http_services";

// Base URLs categorized by functionality
const BASE_URL = {
    createUser: "/user/create-user",
    userLogin: "/user/login",
};

// User API
export function createUser(data) {
    return http.post(BASE_URL.createUser, data);
}

export function userLogin(data) {
    return http.post(BASE_URL.userLogin, data, {
        withCredentials: true, // Ensures cookies (like JWT tokens) are included in the request
    });
}