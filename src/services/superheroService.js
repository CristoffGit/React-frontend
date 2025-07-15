import axios from "axios";
import { toast } from "react-toastify"; // Import toast from react-toastify

const API_URL = "http://localhost:3001/superheroes";

// Fetch superheroes with pagination
export const fetchSuperheroes = async (page, limit) => {
  try {
    const { data } = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
    return data; // Return the paginated response from the API
  } catch (error) {
    // If an error occurs, show a notification
    toast.error(error.response?.data?.message);
    // Optionally, you can return a default object to prevent breaking the app
    return { page: 1, limit, total: 0, totalPages: 0, data: [] };
  }
};

// Add a new superhero
export const addSuperhero = async (superhero) => {
  try {
    await axios.post(API_URL, superhero);
    toast.success("Superhero added successfully!"); // Success notification
  } catch (error) {
    // If an error occurs, show a notification
    toast.error(error.response?.data?.message);
  }
};