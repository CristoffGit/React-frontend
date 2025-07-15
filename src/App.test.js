import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ToastContainer } from "react-toastify";
import App from "./App"; // Import the App component
import axios from "axios";
import MockAdapter from "axios-mock-adapter"; // For mocking API requests

// Create a mock instance of axios
const mockAxios = new MockAdapter(axios);

describe("Superhero App", () => {
  afterEach(() => {
    mockAxios.reset(); // Reset axios mock after each test
    jest.clearAllMocks();
  });

  test("displays superheroes successfully", async () => {
    // Mock successful response from the API
    const superheroesData = {
      page: 1,
      limit: 5,
      total: 2,
      totalPages: 1,
      data: [
        { id: 1, name: "Superman", superpower: "Flight", humilityScore: 2 },
        { id: 2, name: "Batman", superpower: "Intelligence", humilityScore: 5 },
      ],
    };

    mockAxios.onGet("http://localhost:3001/superheroes?page=1&limit=5").reply(200, superheroesData);

    render(<App />);

    // Wait for the superheroes to be rendered on the screen
    await waitFor(() => screen.getByText("Superman"));
    expect(screen.getByText("Superman")).toBeInTheDocument();
    expect(screen.getByText("Batman")).toBeInTheDocument();
  });

  test("shows error notification when fetching superheroes fails", async () => {
    // Mock an error response from the API
    mockAxios.onGet("http://localhost:3001/superheroes?page=1&limit=5").reply(500);

    render(<App />);

    // Wait for the error notification to appear
    await waitFor(() => screen.getByText("Failed to load superheroes. Please try again."));
    expect(screen.getByText("Failed to load superheroes. Please try again.")).toBeInTheDocument();
  });

  test("shows success notification when adding superhero succeeds", async () => {
    // Mock successful response for adding a superhero
    mockAxios.onPost("http://localhost:3001/superheroes").reply(200);

    render(<App />);

    // Open the modal to add a new superhero
    fireEvent.click(screen.getByText("Add New Superhero"));

    // Wait for the modal to open and then simulate adding a new superhero
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Ironman" } });
    fireEvent.change(screen.getByLabelText(/superpower/i), { target: { value: "Repulsor Rays" } });
    fireEvent.change(screen.getByLabelText(/humility score/i), { target: { value: 3 } });

    // Simulate form submission
    fireEvent.click(screen.getByText("Submit"));

    // Wait for the success notification to appear
    await waitFor(() => screen.getByText("Superhero added successfully!"));
    expect(screen.getByText("Superhero added successfully!")).toBeInTheDocument();
  });

  test("shows error notification when adding superhero fails", async () => {
    // Mock an error response for adding a superhero
    mockAxios.onPost("http://localhost:3001/superheroes").reply(500);

    render(<App />);

    // Open the modal to add a new superhero
    fireEvent.click(screen.getByText("Add New Superhero"));

    // Wait for the modal to open and then simulate adding a new superhero
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Ironman" } });
    fireEvent.change(screen.getByLabelText(/superpower/i), { target: { value: "Repulsor Rays" } });
    fireEvent.change(screen.getByLabelText(/humility score/i), { target: { value: 3 } });

    // Simulate form submission
    fireEvent.click(screen.getByText("Submit"));

    // Wait for the error notification to appear
    await waitFor(() => screen.getByText("Failed to add superhero. Please try again."));
    expect(screen.getByText("Failed to add superhero. Please try again.")).toBeInTheDocument();
  });
});

