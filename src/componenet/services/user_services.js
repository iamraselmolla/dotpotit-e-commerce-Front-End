import http from "./http_services";

// Base URLs categorized by functionality
const BASE_URL = {
    createUser: "/user/create-user",
    userLogin: "/user/login",

    createCategory: "/category/create-category",
    getAllCategories: "/category/get-categories",

    // createProduct: "/product/create-product",
    getAllProducts: "/product/get-products",

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


export function createCategory(data) {
    return http.post(BASE_URL.createCategory, data);
}

export function getAllCategories() {
    return http.get(BASE_URL.getAllCategories);
}

export function getAllProducts() {
    return http.get(BASE_URL.getAllProducts);
}
