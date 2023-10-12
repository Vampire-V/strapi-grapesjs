import axios from "axios";

// Create and configure your Axios instance
const axiosInstance = axios.create({
    baseURL: 'https://api.example.com', // Set your base URL
    timeout: 5000, // Set your desired timeout
  });
  
  // You can also set default headers or interceptors here if needed
  
  module.exports = axiosInstance;