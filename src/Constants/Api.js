//  Host
// export const host = "http://localhost:8000/api/v1";
export const host = "https://spyne-assignment-backend-1.onrender.com/api/v1";
// https://scholar-sync-backend-3.onrender.com/

// User APIs
export const registerUser = `${host}/users/register`;
export const login = `${host}/users/login`;
export const logout = `${host}/users/logout`;

// Car APIs
const cars = `${host}/cars`;
export const createCar = `${cars}/createCar`;
export const getAllCar = `${cars}/getAllCar`;
// export const getCardById = `${cars}/getCardById/:id`;
// export const updateCar = `${cars}/updateCar/`;
// export const deleteCar = `${cars}/deleteCar/`;
