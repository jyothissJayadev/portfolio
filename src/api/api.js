import axios from 'axios';
// import { jwtDecode } from "jwt-decode";

axios.defaults.baseURL = "http://localhost:8080";
export async function registerUser(credentials) {
    try {
      const response = await axios.post(`/api/register`, JSON.stringify(credentials), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Check if the response indicates success or failure
      if (response.data.success) {
        // Registration was successful
        return Promise.resolve(response.data.message);
      } else {
        // Registration failed, reject with the error message
        return Promise.reject(response.data.error);
      }
    } catch (error) {
      // Handle unexpected errors (e.g., network issues)
      console.error(error);
      return Promise.reject(error.response.data.error);
    }
  }