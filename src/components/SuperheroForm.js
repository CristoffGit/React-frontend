import React, { useState } from "react";
import formStyles from "../styles/formStyles.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Import the default styles for react-toastify

const SuperheroForm = ({ onAddSuperhero }) => {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous error messages before starting validation

    // Check if name, superpower, or humility score is empty
    if (!name || !superpower || !humilityScore) {
      toast.error("All fields are required.");
      return;
    }
    // Check if humility score is less than or equal to 10
    if (Number(humilityScore) > 10) {
      toast.error("Humility Score Must be less than 10");
      return;
    }
    if (Number(humilityScore) < 1) {
      toast.error("Humility Score is bigger than 1");
      return;
    }
    // If validation passes, add the superhero
    onAddSuperhero({ name, superpower, humilityScore: Number(humilityScore) });

    // Clear form fields after submission
    setName("");
    setSuperpower("");
    setHumilityScore("");
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles.form}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={formStyles.input}
      />
      <input
        type="text"
        placeholder="Superpower"
        value={superpower}
        onChange={(e) => setSuperpower(e.target.value)}
        style={formStyles.input}
      />
      <input
        type="number"
        placeholder="Humility Score"
        value={humilityScore}
        onChange={(e) => setHumilityScore(e.target.value)}
        style={formStyles.input}
      />
      
  {/* Error message displayed below inputs */}


      <button type="submit" style={formStyles.button}>
        Add Superhero
      </button>
    </form>
  );
};

export default SuperheroForm;
